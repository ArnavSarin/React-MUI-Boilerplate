import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Create a baseTheme instance.
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
            textColor: '#000000',
            fontSize: '22px',
            fontWeight: '500',
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
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D3FFE7',
                },
            },
        },
    },
};

const baseTheme = createTheme(baseThemeOptions);

export default baseTheme;
