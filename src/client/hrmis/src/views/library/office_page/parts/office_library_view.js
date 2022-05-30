import React, { useMemo, useEffect, useState } from 'react';
import ButtonComponent from '../../../common/button_component/button_component.js.js';
import axios from 'axios';
import { API_HOST } from '../../../../helpers/global/global_config.js';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useSelectValueCon } from '../../../../helpers/use_hooks/select_value_cons.js';
import BreadcrumbConfig, {
	crumbSecondLevel,
} from '../../../../router/breadcrumb_config';
import {
	apiGetPositions,
	apiModelOffices,
	apiModelOfficeType,
	apiModelOfficeAreaType,
} from './input_items.js';
import { useToggleHelper } from '../../../../helpers/use_hooks/toggle_helper.js';
import AddOfficeModal from '../add_office_modal.js';
import { Outlet } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import BreadcrumbComponent from '../../../common/breadcrumb_component/Breadcrumb.js';
import { libraryOfficeBreadCrumbs } from '../../../rsp_module/plantilla/static/breadcramp_data.js';
import OfficeLibraryTable from './officeLibraryTable.js';
import AgencyLibraryTable from './agencyLibraryTable.js';

const LibraryOfficeView = ({}) => {
	let [toggleOfficeModal, setToggleOfficeModal] = useToggleHelper(false);
	const { getSecondLevel } = crumbSecondLevel();
	const [plotOfficeData, setOfficeData] = useState([]);
	const { refresh } = useSelector((state) => state.popupResponse);
	const { trueValue } = useSelectValueCon();
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	const offceDataApi = async () => {
		await axios
			.get(API_HOST + 'getOffices')
			.then((response) => {
				let data = response.data ?? [];
				let dataPlot = [];
				data.map((data) => {
					// console.log(apiModelOfficeType);

					let values = {
						ofc_id: data.ofc_id,
						ofc_type: data.ofc_type,
						ofc_type_text: trueValue(data.ofc_type, apiModelOfficeType),
						ofc_name: data.ofc_name,
						ofc_acronym: data.ofc_acronym,
						ofc_area_code: data.ofc_area_code,
						ofc_area_type: data.ofc_area_type,
						ofc_area_type_text: trueValue(
							data.ofc_area_type,
							apiModelOfficeAreaType
						),
						plantilla: trueValue(data.plantilla, apiGetPositions),
						ofc_head: data.plantilla,
						plantilla_oic: trueValue(data.plantilla_oic, apiGetPositions),
						ofc_oic: data.plantilla_oic,
						ofc_ofc_id: data.ofc_ofc_id,
						parent: trueValue(data.ofc_ofc_id, apiModelOffices),
					};

					dataPlot.push(values);
				});
				setOfficeData(dataPlot);
			})
			.catch((error) => {});
	};

	useEffect(() => {
		offceDataApi();
	}, [refresh]);

	let data = useMemo(() => plotOfficeData, [plotOfficeData]);

	const columns = useMemo(
		() => [
			{
				Header: 'Office ID',
				accessor: 'ofc_id',
			},
			{
				Header: 'Office',
				accessor: 'ofc_type',
			},
			{
				Header: 'Office Type',
				accessor: 'ofc_type_text',
			},
			{
				Header: 'Office Name',
				accessor: 'ofc_name',
			},
			{
				Header: 'Office Acronym',
				accessor: 'ofc_acronym',
			},
			{
				Header: 'Office Area Code',
				accessor: 'ofc_area_code',
			},
			{
				Header: 'Office Area',
				accessor: 'ofc_area_type',
			},
			{
				Header: 'Office Area Type',
				accessor: 'ofc_area_type_text',
			},
			{
				Header: 'Office Head',
				accessor: 'plantilla',
			},
			{
				Header: 'Head',
				accessor: 'ofc_head',
			},
			{
				Header: 'Office OIC',
				accessor: 'plantilla_oic',
			},
			{
				Header: 'OIC',
				accessor: 'ofc_oic',
			},
			{
				Header: 'Parent_ID',
				accessor: 'ofc_ofc_id',
			},
			{
				Header: 'Parent Office',
				accessor: 'parent',
			},
		],
		[]
	);

	const initialState = {
		hiddenColumns: [
			'ofc_type',
			'ofc_oic',
			'ofc_head',
			'ofc_ofc_id',
			'ofc_id',
			'ofc_area_type',
		],
	};

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
		setFilter,
	} = useTable(
		{
			initialState,
			columns,
			data,
		},
		useFilters,
		useGlobalFilter,
		useSortBy
	);

	const [dataState, setDataState] = useState();
	const passModalData = (param) => {
		setDataState(param);
		setToggleOfficeModal();
	};

	// const { globalFilter } = state;
	return (
		<div>
			<BreadcrumbComponent list={libraryOfficeBreadCrumbs} className='' />
			<div className='container-vacant-position'>
				<div className='regular-tab-component'>
					<div className='reg-tab-container '>
						<button
							onClick={() => toggleTab(1)}
							className={toggleState === 1 ? 'reg-tab-activate' : 'reg-tab'}
						>
							Offices
						</button>
						<button
							onClick={() => toggleTab(2)}
							className={toggleState === 2 ? 'reg-tab-activate' : 'reg-tab'}
						>
							Agencies
						</button>
					</div>
				</div>
				<hr className='solid' />
			</div>
			<div>{toggleState === 1 && <OfficeLibraryTable />}</div>
			<div>{toggleState === 2 && <AgencyLibraryTable />}</div>
		</div>
	);
};

export default LibraryOfficeView;
