import { InsightProps } from './types';
import { Stack, Typography } from '@mui/material';
import styles from './Insight.module.scss';
import { InsightAvatar } from '../styled/Avatar';

const Insight = ({ icon, title, primaryText, secondaryText }: InsightProps) => {
    return (
        <Stack direction="row" spacing={3} className={styles.insightContainer}>
            <InsightAvatar className={styles.insightAvatar}>
                {icon && icon}
            </InsightAvatar>
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
