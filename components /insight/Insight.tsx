import { InsightProps } from './types';
import { Stack, Typography, Avatar } from '@mui/material';
import styles from './Insight.module.scss';

const Insight = ({ icon, title, primaryText, secondaryText }: InsightProps) => {
    return (
        <Stack direction="row" spacing={3} className={styles.insightContainer}>
            <Avatar className={styles.insightAvatar}>{icon && icon}</Avatar>
            <Stack direction="column">
                <Typography className={styles.insightTitle} variant={'h4'}>
                    {title}
                </Typography>
                <Typography
                    className={styles.insightPrimaryText}
                    variant={'h2'}
                >
                    {primaryText}
                </Typography>
                {secondaryText}
            </Stack>
        </Stack>
    );
};

export default Insight;
