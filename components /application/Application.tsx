import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Application.module.scss';
import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import { ApplicationPageProps, ApplicationProps } from './types';
import { ReactElement, useEffect, useState } from 'react';
import { ApplicationAvatar } from '../styled/Avatar';

const ApplicationPage = ({
    title,
    children,
    schema,
    page,
    totalPages,
    onSubmit,
    onPrev,
}: ApplicationPageProps) => {
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <FormProvider {...methods}>
            <form
                className={styles.formContainer}
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <Grid2 container className={styles.applicationGrid} spacing={2}>
                    <Grid2 item size={12}>
                        <Typography variant={'h1'}>{title}</Typography>
                    </Grid2>
                    {children}
                    <Grid2 size={6}>
                        {page > 0 &&
                            ((
                                <Button
                                    className={styles.field}
                                    variant="contained"
                                    onClick={onPrev}
                                >
                                    Prev
                                </Button>
                            ) as ReactElement)}
                    </Grid2>
                    <Grid2 size={6}>
                        {page < totalPages - 1 &&
                            ((
                                <Button
                                    className={styles.field}
                                    variant="contained"
                                    type="submit"
                                >
                                    Next
                                </Button>
                            ) as ReactElement)}
                    </Grid2>
                </Grid2>
            </form>
        </FormProvider>
    );
};

const Application = ({ applicationList }: ApplicationProps<any>) => {
    const [formFields, setFormFields] = useState<>({});
    const [page, setPage] = useState<number>(0);

    //TODO: ADD A PREV AND FIX THIS MERGING OF FIELDS

    useEffect(() => {
        console.log('Form Fields UseEffect: ', formFields);
    }, [formFields]);

    const onSubmit = (data) => {
        setPage(page + 1);
        setFormFields({ ...formFields, ...data });
        return;
    };

    const onPrev = () => {
        setPage(page - 1);
        return;
    };

    return (
        <Stack className={styles.applicationContainer}>
            <Box className={styles.multiAvatarContainer}>
                {applicationList.map((item) => {
                    return (
                        <Box className={styles.avatarContainer}>
                            <ApplicationAvatar className={styles.insightAvatar}>
                                {item.icon}
                            </ApplicationAvatar>
                            <Typography variant={'h4'}>{item.title}</Typography>
                        </Box>
                    ) as ReactElement<{}>;
                })}
            </Box>
            <ApplicationPage
                title={applicationList[page].title}
                icon={applicationList[page].icon}
                children={applicationList[page].children}
                schema={applicationList[page].schema}
                page={page}
                totalPages={applicationList.length}
                onSubmit={onSubmit}
                onPrev={onPrev}
            />
        </Stack>
    );
};

export default Application;
