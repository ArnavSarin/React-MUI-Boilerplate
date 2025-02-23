import { Button, Grid2, Typography } from '@mui/material';
import TextField from '../../components /form/text-field/TextField';
import styles from './IdentityContact.module.scss';

export const IdentityContact = () => {
    return (
        <Grid2 container className={styles.identityContactGrid} spacing={2}>
            <Grid2 item size={12}>
                <Typography variant={'h1'}>Identity & Contact</Typography>
            </Grid2>
            <Grid2 item size={6}>
                <TextField
                    name={'FirstName'}
                    className={styles.field}
                    id={'FirstName'}
                    label={'First Name'}
                    placeholder={'John'}
                />
            </Grid2>
            <Grid2 item size={6}>
                <TextField
                    name={'LastName'}
                    className={styles.field}
                    id={'LastName'}
                    label={'Last Name'}
                    placeholder={'Doe'}
                />
            </Grid2>
            <Grid2 size={4}>
                <TextField
                    name={'Position'}
                    className={styles.field}
                    id={'Position'}
                    label={'Position'}
                    placeholder={'Fundraising Chair'}
                />
            </Grid2>
            <Grid2 size={4}>
                <TextField
                    name={'Email'}
                    className={styles.field}
                    id={'Email'}
                    label={'Email'}
                    placeholder={'john@example.com'}
                />
            </Grid2>
            <Grid2 size={4}>
                <TextField
                    name={'PhoneNumber'}
                    className={styles.field}
                    id={'PhoneNumber'}
                    label={'Phone Number'}
                    placeholder={'+1 234 567 8900'}
                />
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
