import Grid from '../../components /grid/Grid';
import { useState } from 'react';
import { enterpriseGridData } from './data';

const EnterpriseGrid = () => {
    const { rowData, setRowData } = enterpriseGridData();

    const [colDefs, setColDefs] = useState([
        { field: 'Project Name' },
        { field: 'State' },
        { field: 'Country' },
        { field: 'Started' },
        { field: 'Architect' },
        { field: 'Status' },
    ]);

    return <Grid rowData={rowData} columnDefs={colDefs} />;
};

export default EnterpriseGrid;
