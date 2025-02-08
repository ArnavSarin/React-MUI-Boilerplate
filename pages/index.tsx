import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import SideNavigation from '../components /side-navigation/SideNavigation';
import { Button } from '@mui/material';

export default function Home() {
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
                            href="/about"
                        >
                            Go to the about page
                        </Button>
                    </Box>
                ) as React.ReactNode
            }
        ></SideNavigation>
    );
}
