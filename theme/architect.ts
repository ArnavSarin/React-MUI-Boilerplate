import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseThemeOptions } from './baseTheme';

const architectThemeOptions = {
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: '#344FFF',
                        '&:hover': {
                            backgroundColor: '#344FFF',
                        },
                    },
                },
            },
        },
    },
};

const architectTheme = createTheme(
    deepmerge(architectThemeOptions, baseThemeOptions)
);

export default architectTheme;
