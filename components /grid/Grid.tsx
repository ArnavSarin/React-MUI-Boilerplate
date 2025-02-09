import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import Box from '@mui/material/Box';
import { GridProps } from './types';
import { useMemo } from 'react';

ModuleRegistry.registerModules([AllCommunityModule]);

const Grid = ({
    rowData,
    colDefs,
    defaultColDef,
    pagination,
    paginationPageSize,
    rowSelection,
    domLayout,
    paginationPageSizeSelector,
    ...props
}: GridProps) => {
    const defaultRowSelection = useMemo(() => {
        return {
            mode: 'singleRow',
        };
    }, []);

    return (
        <Box style={{ width: '100%', height: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef ?? { minWidth: 100 }}
                pagination={pagination ?? true}
                paginationPageSize={paginationPageSize ?? 10}
                rowSelection={rowSelection ?? defaultRowSelection}
                domLayout={domLayout ?? 'autoHeight'}
                paginationPageSizeSelector={paginationPageSizeSelector ?? false}
                {...props}
            />
        </Box>
    );
};

export default Grid;
