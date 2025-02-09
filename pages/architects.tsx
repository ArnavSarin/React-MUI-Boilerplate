import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { SideNavigationItem } from '../components /side-navigation/types';
import { ThemeProvider } from '@mui/material/styles';
import architectTheme from '../theme/architect';

//TODO: REFACTOR EACH PAGE TO USE ONE EXPERIENCE COMPONENT AND SAME WITH THEME

export default function Architects() {
    return (
        <ThemeProvider theme={architectTheme}>
            <SideNavigation
                open={true}
                navigationList={
                    [
                        {
                            name: 'Item 1',
                            icon: () => <AccountBoxIcon />,
                        },
                        {
                            name: 'Item 2',
                            icon: () => <AccountBoxIcon />,
                        },
                    ] as SideNavigationItem[]
                }
                sideNavChildren={
                    (
                        <Box sx={{ maxWidth: 'sm' }}>
                            <Button
                                variant="contained"
                                component={Link}
                                noLinkStyle
                                href="/"
                            >
                                Go to the home page
                            </Button>
                        </Box>
                    ) as React.ReactNode
                }
            ></SideNavigation>
        </ThemeProvider>
    );
}
