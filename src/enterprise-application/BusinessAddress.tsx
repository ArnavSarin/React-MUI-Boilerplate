import { Grid2 } from '@mui/material';
import styles from './EnterpriseApplication.module.scss';
import TextField from '../../components /form/text-field/TextField';

export const BusinessAddress = () => {
    return (
        <Grid2 item size={6}>
            <TextField
                name={'BusinessName'}
                className={styles.field}
                id={'BusinessName'}
                label={'Business Name'}
                placeholder={'The Yellow Company'}
            />
        </Grid2>
    );
};
