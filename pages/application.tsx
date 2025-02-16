import { FormProvider, useForm } from 'react-hook-form';
import { Button, Grid2, Stack, Typography } from '@mui/material';
import styles from './Application.module.scss';
import TextField from '../components /form/text-field/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { MasterSchema } from '../schema/MasterSchema';

const application = () => {
    const methods = useForm({ resolver: yupResolver(MasterSchema) });
    const onSubmit = (data) => console.log(data);
    return (
        <Stack className={styles.applicationContainer}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Grid2
                        container
                        className={styles.identityContactGrid}
                        spacing={4}
                    >
                        <Grid2 item size={12}>
                            <Typography variant={'h1'}>
                                Identity & Contact
                            </Typography>
                        </Grid2>
                        <Grid2 item size={4}>
                            <TextField
                                name={'FullName'}
                                className={styles.field}
                                id={'FullName'}
                                label={'Full Name'}
                                placeholder={'John Doe'}
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
                        <Grid2 size={12}>
                            <Button
                                className={styles.field}
                                variant="contained"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid2>
                    </Grid2>
                </form>
            </FormProvider>
        </Stack>
    );
};

export default application;
