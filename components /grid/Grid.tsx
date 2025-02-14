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
import { useCallback, useMemo, useRef } from 'react';
import { Stack, Typography } from '@mui/material';
import styles from './Grid.module.scss';
import TextField from '../form/text-field/TextField';
import Box from '@mui/material/Box';
import { mergeRefs } from 'react-merge-refs';

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
    const onSearchChange = useCallback(() => {
        gridRef.current!.api.setGridOption(
            'quickFilterText',
            (document.getElementById('search') as HTMLInputElement).value
        );
    }, []);

    const gridRef = useRef<AgGridReact>(null);

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

    const myTheme = themeQuartz.withParams({
        accentColor: '#008CFF',
        backgroundColor: '#FFFFFF',
        borderColor: '#00000000',
        browserColorScheme: 'dark',
        cellTextColor: '#292D32',
        chromeBackgroundColor: '#FFFFFF',
        columnBorder: true,
        fontFamily: 'inherit',
        foregroundColor: '#000000',
        headerFontFamily: 'inherit',
        headerFontSize: 14,
        headerRowBorder: true,
        headerTextColor: '#B5B7C0',
        oddRowBackgroundColor: '#FFFFFF',
        rowBorder: true,
        spacing: 8,
        wrapperBorder: true,
    });

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
                        onInput={onSearchChange}
                        fullWidth={false}
                    />
                </Box>
            </Stack>
            <AgGridReact
                ref={ref ? mergeRefs([gridRef, ref]) : gridRef}
                theme={myTheme}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef ?? { minWidth: 100 }}
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
