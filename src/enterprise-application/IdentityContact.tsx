import { Grid2 } from '@mui/material';
import TextField from '../../components /form/text-field/TextField';
import styles from './EnterpriseApplication.module.scss';

export const IdentityContact = () => {
    return (
        <>
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
            <Grid2 size={6}>
                <TextField
                    name={'Position'}
                    className={styles.field}
                    id={'Position'}
                    label={'Position'}
                    placeholder={'Fundraising Chair'}
                />
            </Grid2>
            <Grid2 size={6}>
                <TextField
                    name={'Email'}
                    className={styles.field}
                    id={'Email'}
                    label={'Email'}
                    placeholder={'john@example.com'}
                />
            </Grid2>
            <Grid2 size={6}>
                <TextField
                    name={'PhoneNumber'}
                    className={styles.field}
                    id={'PhoneNumber'}
                    label={'Phone Number'}
                    placeholder={'+1 234 567 8900'}
                />
            </Grid2>
        </>
    );
};
