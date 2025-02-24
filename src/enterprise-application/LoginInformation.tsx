import TextField from '../../components /form/text-field/TextField';
import styles from './EnterpriseApplication.module.scss';
import { Grid2 } from '@mui/material';

export const LoginInformation = () => {
    return (
        <>
            <Grid2 item size={6}>
                <TextField
                    name={'Username'}
                    className={styles.field}
                    id={'Username'}
                    label={'Username'}
                    placeholder={'JohnDoe123'}
                />
            </Grid2>
            <Grid2 item size={6}>
                <TextField
                    name={'Password'}
                    className={styles.field}
                    id={'Password'}
                    label={'Password'}
                    placeholder={'● ● ● ● ● ● ● ● ● ● '}
                />
            </Grid2>
        </>
    );
};
