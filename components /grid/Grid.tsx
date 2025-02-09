import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import Box from '@mui/material/Box';
import { GridProps } from './types';

ModuleRegistry.registerModules([AllCommunityModule]);

const Grid = ({ rowData, colDefs, defaultColDef, ...props }: GridProps) => {
    return (
        <Box style={{ width: '100%', height: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                {...props}
            />
        </Box>
    );
};

export default Grid;
