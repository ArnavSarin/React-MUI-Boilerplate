import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import enterpriseTheme from '../theme/enterprise';
import EnterpriseGrid from '../src/enterprise-grid/EnterpriseGrid';
import EnterpriseInsightsCard from '../src/EnterpriseInsightsCard';
import { ReactComponent as Dashboard } from '../public/Dashboard.svg';
import { SideNavigationItem } from '../components /side-navigation/types';
import BuildIcon from '@mui/icons-material/Build';
import styles from './Main.module.scss';

export default function Enterprise() {
    return (
        <ThemeProvider theme={enterpriseTheme}>
            <SideNavigation
                open={true}
                navigationList={
                    [
                        {
                            name: 'Dashboard',
                            icon: <BuildIcon />,
                            // icon: <SvgIcon><Dashboard/><SvgIcon/>,
                        },
                        {
                            name: 'Project',
                            // icon: <SvgIcon><Dashboard/><SvgIcon/>,
                            icon: <BuildIcon />,
                        },
                        {
                            name: 'Funding',
                            // icon: <SvgIcon><Dashboard/><SvgIcon/>,
                            icon: <BuildIcon />,
                        },
                        {
                            name: 'Account History',
                            // icon: <SvgIcon><Dashboard/><SvgIcon/>,
                            icon: <BuildIcon />,
                        },
                        {
                            name: 'Help',
                            // icon: <SvgIcon><Dashboard/><SvgIcon/>,
                            icon: <BuildIcon />,
                        },
                    ] as SideNavigationItem[]
                }
                sideNavChildren={
                    (
                        <Stack
                            direction="column"
                            spacing={2}
                            className={styles.mainContainer}
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
