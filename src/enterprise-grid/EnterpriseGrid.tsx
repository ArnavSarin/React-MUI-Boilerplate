import Grid from '../../components /grid/Grid';
import { useState } from 'react';
import { enterpriseGridData } from './data';

const EnterpriseGrid = () => {
    const { rowData, setRowData } = enterpriseGridData();

    const [columnDefs, setColDefs] = useState([
        { field: 'Project Name' },
        { field: 'State' },
        { field: 'Country' },
        { field: 'Started' },
        { field: 'Architect' },
        { field: 'Status' },
    ]);

    return <Grid rowData={rowData} columnDefs={columnDefs} />;
};

export default EnterpriseGrid;
