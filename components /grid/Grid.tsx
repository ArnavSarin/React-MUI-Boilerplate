import { AgGridReact } from 'ag-grid-react';
import {
    themeQuartz,
    AllCommunityModule,
    ModuleRegistry,
    QuickFilterModule,
    ValidationModule,
    ClientSideRowModelModule,
} from 'ag-grid-community';
import { GridProps } from './types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, InputAdornment, Stack, Typography } from '@mui/material';
import styles from './Grid.module.scss';
import TextField from '../form/text-field/TextField';
import { mergeRefs } from 'react-merge-refs';
import SearchIcon from '@mui/icons-material/Search';

ModuleRegistry.registerModules([
    /* Development Only */
    AllCommunityModule,
    QuickFilterModule,
    ClientSideRowModelModule,
    ValidationModule,
]);

const Grid = ({
    title,
    ref,
    className,
    theme,
    rowData,
    columnDefs,
    defaultColDef,
    pagination,
    paginationPageSize,
    paginationPageSizeSelector,
    rowSelection,
    onFirstDataRendered,
    ...props
}: GridProps) => {
    const gridRef = useRef<AgGridReact>(null);

    const onSearchChange = useCallback(() => {
        gridRef.current!.api.setGridOption(
            'quickFilterText',
            (document.getElementById('Search') as HTMLInputElement).value
        );
    }, []);

    const defaultRowSelection = useMemo(() => {
        return {
            mode: 'singleRow',
            checkboxes: false,
            enableClickSelection: true,
        };
    }, []);

    const defaultOnFirstDataRendered = useCallback(
        (params: FirstDataRenderedEvent) => {
            params.api.sizeColumnsToFit();
        },
        []
    );

    return (
        <Stack direction="column" className={styles.gridContainer}>
            <Stack>
                <Box className={styles.searchContainer}>
                    <Typography variant={'h1'}>{title}</Typography>
                    <TextField
                        className={styles.search}
                        name="Search"
                        id="Search"
                        label="Search"
                        onChange={onSearchChange}
                        fullWidth={false}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Box>
            </Stack>
            <AgGridReact
                ref={ref ? mergeRefs([gridRef, ref]) : gridRef}
                className={className}
                theme={theme ?? themeQuartz}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={
                    defaultColDef ?? {
                        minWidth: 200,
                        cellStyle: (params) => ({
                            display: 'flex',
                            alignItems: 'center',
                        }),
                    }
                }
                pagination={pagination ?? true}
                paginationPageSize={paginationPageSize ?? 10}
                paginationPageSizeSelector={paginationPageSizeSelector ?? false}
                rowSelection={rowSelection ?? defaultRowSelection}
                onFirstDataRendered={(event) => {
                    if (onFirstDataRendered) {
                        onFirstDataRendered(event);
                    }
                    return defaultOnFirstDataRendered(event);
                }}
                {...props}
            />
        </Stack>
    );
};

export default Grid;
