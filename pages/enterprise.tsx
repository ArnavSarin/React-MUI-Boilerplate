import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { SideNavigationItem } from '../components /side-navigation/types';
import { ThemeProvider } from '@mui/material/styles';
import enterpriseTheme from '../theme/enterprise';
import EnterpriseGrid from '../src/enterprise-grid/EnterpriseGrid';
import EnterpriseInsightsCard from '../src/EnterpriseInsightsCard';

export default function Enterprise() {
    return (
        <ThemeProvider theme={enterpriseTheme}>
            <SideNavigation
                open={true}
                navigationList={
                    [
                        {
                            name: 'Dashboard',
                            icon: <AccountBoxIcon />,
                        },
                        {
                            name: 'Project',
                            icon: <AccountBoxIcon />,
                        },
                        {
                            name: 'Funding',
                            icon: <AccountBoxIcon />,
                        },
                        {
                            name: 'Account History',
                            icon: <AccountBoxIcon />,
                        },
                        {
                            name: 'Help',
                            icon: <AccountBoxIcon />,
                        },
                    ] as SideNavigationItem[]
                }
                sideNavChildren={
                    (
                        <Stack
                            direction="column"
                            spacing={2}
                            sx={{
                                width: '100%',
                                height: '100%',
                                padding: '2em',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                component={Link}
                                noLinkStyle
                                href="/"
                            >
                                Go to the home page
                            </Button>
                            <EnterpriseInsightsCard />
                            <EnterpriseGrid />
                        </Stack>
                    ) as React.ReactNode
                }
            ></SideNavigation>
        </ThemeProvider>
    );
}
