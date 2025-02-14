import { AgGridReact } from 'ag-grid-react';
import {
    AllCommunityModule,
    ModuleRegistry,
    QuickFilterModule,
    ValidationModule,
    ClientSideRowModelModule,
} from 'ag-grid-community';
import { GridProps } from './types';
import { useCallback, useMemo, useRef } from 'react';
import { Stack } from '@mui/material';
import styles from './Grid.module.scss';
import TextField from '../form/text-field/TextField';
import Box from '@mui/material/Box';

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
    gridOptions,
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
        <Stack direction="column" className={styles.gridContainer}>
            <Stack>
                <Box className={styles.searchContainer}>
                    <TextField
                        className={styles.search}
                        name="Search"
                        id="Search"
                        label="Search"
                        onInput={onSearchChange}
                        fullWidth={false}
                    />
                </Box>
            </Stack>
            <AgGridReact
                ref={gridRef}
                // className={styles.grid}
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
