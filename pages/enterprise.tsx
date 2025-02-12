import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import enterpriseTheme from '../theme/enterprise';
import EnterpriseGrid from '../src/enterprise-grid/EnterpriseGrid';
import EnterpriseInsightsCard from '../src/EnterpriseInsightsCard';
import { ReactComponent as Dashboard } from '../assets/svg/Dashboard.svg';
import { SideNavigationItem } from '../components /side-navigation/types';
import styles from './Main.module.scss';
import {
    AccountHistoryIcon,
    DashboardIcon,
    FundingIcon,
    HelpIcon,
    ProjectsIcon,
} from '../assets/Icons';

export default function Enterprise() {
    return (
        <ThemeProvider theme={enterpriseTheme}>
            <SideNavigation
                open={true}
                navigationList={
                    [
                        {
                            name: 'Dashboard',
                            icon: <DashboardIcon />,
                        },
                        {
                            name: 'Projects',
                            icon: <ProjectsIcon />,
                        },
                        {
                            name: 'Funding',
                            icon: <FundingIcon />,
                        },
                        {
                            name: 'Account History',
                            icon: <AccountHistoryIcon />,
                        },
                        {
                            name: 'Help',
                            icon: <HelpIcon />,
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
