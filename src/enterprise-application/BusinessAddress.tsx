import styles from './ApplicationGrid.module.scss';
import { Button, Grid2, Typography } from '@mui/material';

export const BusinessAddress = () => {
    return (
        <Grid2 container className={styles.applicationGrid} spacing={2}>
            <Grid2 item size={12}>
                <Typography variant={'h1'}>Business Address</Typography>
            </Grid2>
            <Grid2 size={6}>
                <Button className={styles.field} variant="contained">
                    Prev
                </Button>
            </Grid2>
            <Grid2 size={6}>
                <Button
                    className={styles.field}
                    variant="contained"
                    type="submit"
                >
                    Next
                </Button>
            </Grid2>
        </Grid2>
    );
};
