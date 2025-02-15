import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Box, IconButton, Stack, Typography, Link } from '@mui/material';
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
import HomeIcon from '@mui/icons-material/Home';

export default function Enterprise() {
    // const SideNavHeader = () => {
    //     return (
    //         <Box className={styles.sideNavHeaderContainer}>
    //             <SocialBrickIcon />
    //         </Box>
    //     );
    // };

    return (
        <ThemeProvider theme={enterpriseTheme}>
            <SideNavigation
                open={true}
                // logoBox={<SideNavHeader />}
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
                            <Stack
                                direction="row"
                                className={styles.headerContainer}
                            >
                                <Typography variant={'h1'}>
                                    Hello Company Name! 👋🏼
                                </Typography>
                                <IconButton
                                    variant="contained"
                                    component={Link}
                                    noLinkStyle
                                    href="/"
                                >
                                    <HomeIcon
                                        sx={{
                                            color: '#9197B3',
                                            height: '2em',
                                            width: '2em',
                                            border: '2px solid #9197B3',
                                            borderRadius: '100px',
                                        }}
                                    />
                                </IconButton>
                            </Stack>
                            <EnterpriseInsightsCard />
                            <EnterpriseGrid />
                        </Stack>
                    ) as React.ReactNode
                }
            ></SideNavigation>
        </ThemeProvider>
    );
}
