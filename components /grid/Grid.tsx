import { AgGridReact } from 'ag-grid-react';
import {
    AllCommunityModule,
    ModuleRegistry,
    QuickFilterModule,
    ValidationModule,
    ClientSideRowModelModule,
} from 'ag-grid-community';
import Box from '@mui/material/Box';
import { GridProps } from './types';
import { useCallback, useMemo, useRef } from 'react';
import { Stack, TextField } from '@mui/material';

ModuleRegistry.registerModules([
    /* Development Only */
    AllCommunityModule,
    QuickFilterModule,
    ClientSideRowModelModule,
    ValidationModule,
]);

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
    const gridRef = useRef<AgGridReact>(null);

    const defaultRowSelection = useMemo(() => {
        return {
            mode: 'singleRow',
        };
    }, []);

    const onSearchChange = useCallback(() => {
        gridRef.current!.api.setGridOption(
            'quickFilterText',
            (document.getElementById('search') as HTMLInputElement).value
        );
    }, []);

    return (
        <Stack direction="column" style={{ width: '100%', height: '100%' }}>
            <Stack>
                <TextField
                    id="search"
                    label="Search"
                    variant="outlined"
                    onInput={onSearchChange}
                />
            </Stack>
            <AgGridReact
                ref={gridRef}
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
        </Stack>
    );
};

export default Grid;
