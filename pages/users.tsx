import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { SideNavigationItem } from '../components /side-navigation/types';
import userTheme from '../theme/user';
import { ThemeProvider } from '@mui/material/styles';

export default function Users() {
    return (
        <ThemeProvider theme={userTheme}>
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
                        <Stack
                            direction="column"
                            spacing={2}
                            sx={{
                                width: '100%',
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
                        </Stack>
                    ) as React.ReactNode
                }
            ></SideNavigation>
        </ThemeProvider>
    );
}
