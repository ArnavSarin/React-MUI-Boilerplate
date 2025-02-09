import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import * as React from 'react';

export default function Home() {
    return (
        <Stack direction="column" spacing={2}>
            <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href="/architects"
            >
                Go to the Architects page
            </Button>
            <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href="/customers"
            >
                Go to the Customers page
            </Button>
            <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href="/users"
            >
                Go to the Users page
            </Button>
        </Stack>
    );
}
