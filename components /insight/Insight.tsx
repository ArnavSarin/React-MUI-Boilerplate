import { InsightProps } from './types';
import { Stack, Typography, Avatar } from '@mui/material';
import styles from './Insight.module.scss';

const Insight = ({ icon, title, primaryText, secondaryText }: InsightProps) => {
    return (
        <Stack
            direction="row"
            spacing={3}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ width: '3em', height: '3em' }}>{icon && icon}</Avatar>
            <Stack direction="column">
                <Typography className={styles.insightTitle}>{title}</Typography>
                <Typography className={styles.insightPrimary}>
                    {primaryText}
                </Typography>
                {secondaryText}
            </Stack>
        </Stack>
    );
};

export default Insight;
