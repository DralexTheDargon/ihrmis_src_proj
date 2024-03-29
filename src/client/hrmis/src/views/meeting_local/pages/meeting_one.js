import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useTable } from 'react-table';
import { API_HOST } from '../../../helpers/global/global_config';
import ButtonComponent from '../../common/button_component/button_component';
import AddPersonModal from '../modal/add_person';

const MeetingOne = () => {

  const [modal, setModal] = useState(false);
  return (
    <div style={{ margin: "10px 20px" }}>
      <AddPersonModal isDisplay={modal} onClose={() => setModal(false)} />

      <ButtonComponent
      onClick={ () => setModal(true)}
      buttonName="Add  Person"
      />

      <DisplayPerson modal={modal} />

      <div className="container-hello">
        <ButtonComponent buttonName="MO-130" onClick={() => setModal(true)} />
      </div>
      <br />
      <div>
        <DisplayPerson modal={modal} />
      </div>

    </div>
  );
};

export default MeetingOne;

const DisplayPerson = ({modal}) => {
  const [personData, setPersonData] = useState([]);

  const fetchPersonData = async () => {
    await axios
    .get(API_HOST + "get-person")
    .then((response) => {
      const data = response?.data;
      setPersonData([...data]);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const data = React.useMemo(() => personData, [personData]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'psn_name',
      },
      {
        Header: 'Email',
        accessor: 'psn_email',
      },
    ],
    []
    );

    useEffect(() => {
      fetchPersonData();
      }, [modal]);

    return (
    <div>
      <PersonTable columns={columns} data={data} />
    </div>
  );
}

const PersonTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } =
    useTable({
      columns,
      data,
    })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
