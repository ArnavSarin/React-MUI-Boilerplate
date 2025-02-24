import { Grid2 } from '@mui/material';
import styles from './EnterpriseApplication.module.scss';
import TextField from '../../components /form/text-field/TextField';

export const BusinessAddress = () => {
    return (
        <>
            <Grid2 item size={12}>
                <TextField
                    name={'BusinessName'}
                    className={styles.field}
                    id={'BusinessName'}
                    label={'Business Name'}
                    placeholder={'The Yellow Company'}
                />
            </Grid2>
            <Grid2 item size={12}>
                <TextField
                    name={'AddressLine1'}
                    className={styles.field}
                    id={'Address line 1'}
                    label={'Address Line 1'}
                    placeholder={'Street Address or P.O. Box'}
                />
            </Grid2>
            <Grid2 item size={12}>
                <TextField
                    name={'AddressLine2'}
                    className={styles.field}
                    id={'AddressLine2'}
                    label={'Address Line 2'}
                    placeholder={'Apt, suit, unit, building, floor, etc.'}
                />
            </Grid2>
            <Grid2 item size={6}>
                <TextField
                    name={'City'}
                    className={styles.field}
                    id={'City'}
                    label={'City'}
                />
            </Grid2>
            <Grid2 item size={6}>
                <TextField
                    name={'StateProvinceRegion'}
                    className={styles.field}
                    id={'StateProvinceRegion'}
                    label={'State/Province/Region'}
                />
            </Grid2>
            <Grid2 item size={6}>
                <TextField
                    name={'Country'}
                    className={styles.field}
                    id={'Country'}
                    label={'Country'}
                />
            </Grid2>
        </>
    );
};
