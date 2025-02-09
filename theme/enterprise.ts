import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseThemeOptions } from './baseTheme';

const enterpriseThemeOptions = {
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: '#E2B281',
                        '&:hover': {
                            backgroundColor: '#E2B281',
                        },
                    },
                },
            },
        },
    },
};

const enterpriseTheme = createTheme(
    deepmerge(enterpriseThemeOptions, baseThemeOptions)
);
export default enterpriseTheme;
