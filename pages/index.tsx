import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Home() {
    return (
        <Box sx={{ maxWidth: 'sm' }}>
            <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href="/example"
            >
                Go to the example page
            </Button>
        </Box>
    );
}
