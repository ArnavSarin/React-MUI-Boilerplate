import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseThemeOptions } from './baseTheme';

const userThemeOptions = {
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

const userTheme = createTheme(deepmerge(userThemeOptions, baseThemeOptions));
export default userTheme;
