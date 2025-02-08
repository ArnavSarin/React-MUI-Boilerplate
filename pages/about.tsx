import * as React from 'react';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function About() {
    return (
        <SideNavigation
            open={true}
            navigationList={[{ name: 'Test' }, { name: 'Test2' }]}
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
    );
}
