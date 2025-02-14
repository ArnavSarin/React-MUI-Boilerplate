import Grid from '../../components /grid/Grid';
import { useState } from 'react';
import { enterpriseGridData } from './data';
import StatusRenderer from './status-renderer/StatusRenderer';

const EnterpriseGrid = () => {
    const { rowData, setRowData } = enterpriseGridData();

    const [columnDefs, setColDefs] = useState([
        { field: 'Project Name' },
        { field: 'Architect' },
        { field: 'State' },
        { field: 'Country' },
        { field: 'Started' },
        { field: 'Status', cellRenderer: StatusRenderer },
    ]);

    return (
        <Grid title={'Projects'} rowData={rowData} columnDefs={columnDefs} />
    );
};

export default EnterpriseGrid;
