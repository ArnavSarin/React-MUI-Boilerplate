import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import * as React from 'react';

//TODO: REFACTOR EACH PAGE TO USE ONE EXPERIENCE COMPONENT

export default function Home() {
    return (
        <Stack direction="column" spacing={2} sx={{ padding: '2em' }}>
            <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href="/application"
            >
                Go to the User Application page
            </Button>
            <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href="/enterprise"
            >
                Go to the Enterprise page
            </Button>
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
                href="/users"
            >
                Go to the Users page
            </Button>
        </Stack>
    );
}
