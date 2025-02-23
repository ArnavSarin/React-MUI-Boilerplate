import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Application.module.scss';
import { Box, Stack, Typography } from '@mui/material';
import { ApplicationPageProps, ApplicationProps } from './types';
import { ReactElement, useState } from 'react';
import { ApplicationAvatar } from '../styled/Avatar';

const ApplicationPage = ({ icon, children }: ApplicationPageProps) => {
    return <>{children}</>;
};

const Application = ({ schema, applicationList }: ApplicationProps<any>) => {
    const methods = useForm({ resolver: yupResolver(schema) });

    const [formFields, setFormFields] = useState<>({});

    const [page, setPage] = useState<number>(0);

    //TODO: ADD A PREV AND FIX THIS MERGING OF FIELDS
    const onSubmit = (data) => {
        setFormFields({ ...formFields, ...data });
        console.log(formFields);
        return;
    };

    return (
        <Stack className={styles.applicationContainer}>
            <FormProvider {...methods}>
                <Box className={styles.multiAvatarContainer}>
                    {applicationList.map((item) => {
                        return (
                            <Box className={styles.avatarContainer}>
                                <ApplicationAvatar
                                    className={styles.insightAvatar}
                                >
                                    {item.icon}
                                </ApplicationAvatar>
                                <Typography variant={'h4'}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ) as ReactElement<{}>;
                    })}
                </Box>
                <form
                    className={styles.formContainer}
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <ApplicationPage
                        title={applicationList[page].title}
                        icon={applicationList[page].icon}
                        children={applicationList[page].children}
                    />
                </form>
            </FormProvider>
        </Stack>
    );
};

export default Application;
