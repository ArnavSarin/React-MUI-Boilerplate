import Grid from '../../components /grid/Grid';
import { useState } from 'react';
import { enterpriseGridData } from './data';
import StatusRenderer from './status-renderer/StatusRenderer';
import ArchitectRenderer from './architect-renderer/ArchitectRenderer';
import styles from './EnterpriseGrid.module.scss';

const EnterpriseGrid = () => {
    const { rowData, setRowData } = enterpriseGridData();

    const [columnDefs, setColDefs] = useState([
        { field: 'Project Name' },
        {
            field: 'Architect',
            cellRenderer: ArchitectRenderer,
            // getQuickFilterText: (params) => {
            //     return params.value;
            // },
            // valueGetter: (p) => p.value,
        },
        { field: 'State' },
        { field: 'Country' },
        { field: 'Started', cellDataType: 'date' },
        {
            field: 'Status',
            cellRenderer: StatusRenderer,
            // getQuickFilterText: (params) => {
            //     return params.value;
            // },
            // valueGetter: (p) => p.value,
        },
    ]);

    return (
        <Grid
            title={'Projects'}
            className={styles.grid}
            rowData={rowData}
            columnDefs={columnDefs}
        />
    );
};

export default EnterpriseGrid;
