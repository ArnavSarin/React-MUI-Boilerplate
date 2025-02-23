import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const baseThemeOptions = {
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        h1: {
            fontSize: '28px',
            fontWeight: '500',
        },
        h2: {
            fontSize: '22px',
            fontWeight: '500',
        },
        h3: {
            fontSize: '18px',
            fontWeight: '500',
        },
        h4: {
            fontSize: '14px',
            fontWeight: '400',
        },
        h5: {
            fontSize: '12px',
            fontWeight: '300',
        },
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        visibility: 'unset !important',
                        transform: 'unset !important',
                        boxSizing: 'border-box',
                        width: '18em',
                        height: '100%',
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        '&:hover': {
                            color: '#FFFFFF',
                            borderRadius: '8px',
                        },
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    border: '1px solid #F0F0F0',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: { shrink: true },
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#F9FBFF',
                },
            },
        },
    },
};

const baseTheme = createTheme(baseThemeOptions);

export default baseTheme;
