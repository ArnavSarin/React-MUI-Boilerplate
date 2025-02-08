import { Poppins, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Create a theme instance.
const exampleTheme = createTheme({
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
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        visibility: 'unset !important',
                        transform: 'unset !important',
                        boxSizing: 'border-box',
                        width: '15em',
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
                        backgroundColor: '#E2B281',
                        borderRadius: '8px',
                        '&:hover': {
                            color: '#FFFFFF',
                            backgroundColor: '#E2B281',
                            borderRadius: '8px',
                        },
                    },
                },
            },
        },
    },
});

export default exampleTheme;
