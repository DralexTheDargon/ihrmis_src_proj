import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_HOST } from "../../../../../helpers/global/global_config";
import ModalComponent from "../../../../common/modal_component/modal_component";

const PositionInfoModal = ({ isDisplay, onClose, pos_id }) => {
  const [dataPosition, setDataPosition] = useState();

  const getPositionInfo = async (id) => {
    await axios
      .get(API_HOST + "get-info-position/" + id)
      .then((res) => {
        setDataPosition(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (pos_id) {
      getPositionInfo(pos_id);
    }
  }, [pos_id]);

  return (
    <React.Fragment>
      <ModalComponent
        title="Position"
        isDisplay={isDisplay}
        onClose={onClose}
        onSubmitName="Edit"
        onPressedHidden={true}
      >
        <div className="default-table">
          <table>
            <thead>
              <tr>
                <th className="main-header cell-color-one" colSpan="2">
                  TITLE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">{dataPosition?.pos_title}</td>
              </tr>
              <tr>
                <th className="main-header cell-color-one">SHORT NAME</th>
                <th className="main-header cell-color-one">SALARY GRADE</th>
              </tr>
              <tr>
                <td>{dataPosition?.pos_short_name}</td>
                <td>{dataPosition?.pos_salary_grade}</td>
              </tr>
              <tr>
                <th
                  className="main-header cell-color-two"
                  style={{ textAlign: "center" }}
                  colSpan="2"
                >
                  CSC QUALIFICATION STANDARDS
                </th>
              </tr>
              <tr>
                <th className="main-header cell-color-one" colSpan="2">
                  EDUCATION
                </th>
              </tr>
              <tr>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th className="main-header cell-color-one" colSpan="2">
                  EXPERIENCE
                </th>
              </tr>
              <tr>
                <td colSpan="2">{dataPosition?.experience}</td>
              </tr>
              <tr>
                <th className="main-header cell-color-one" colSpan="2">
                  TRAINING
                </th>
              </tr>
              <tr>
                <td colSpan="2">{dataPosition?.training}</td>
              </tr>
              <tr>
                <th className="main-header cell-color-one" colSpan="2">
                  ELIGIBILITY
                </th>
              </tr>
              <tr>
                <td colSpan="2">{dataPosition?.eligibility}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ModalComponent>
    </React.Fragment>
  );
};

export default PositionInfoModal;