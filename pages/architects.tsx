import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { SideNavigationItem } from '../components /side-navigation/types';
import { ThemeProvider } from '@mui/material/styles';
import architectTheme from '../theme/architect';
import styles from './Main.module.scss';

export default function Architects() {
    return (
        <ThemeProvider theme={architectTheme}>
            <SideNavigation
                open={true}
                navigationList={
                    [
                        {
                            name: 'Item 1',
                            icon: <AccountBoxIcon />,
                        },
                        {
                            name: 'Item 2',
                            icon: <AccountBoxIcon />,
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
                        </Stack>
                    ) as React.ReactNode
                }
            ></SideNavigation>
        </ThemeProvider>
    );
}
