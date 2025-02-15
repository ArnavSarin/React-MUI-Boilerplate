import { CustomCellRendererProps } from 'ag-grid-react';
import { Button, Typography, Box } from '@mui/material';
import styles from './ArchitectRenderer.module.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';

const ArchitectRenderer = (params: CustomCellRendererProps) => {
    return (
        <Button className={styles.architectContainer}>
            <Box className={styles.textContainer}>
                <Typography className={styles.primaryText} variant={'h3'}>
                    {params.value}
                </Typography>
                <Typography className={styles.secondaryText} variant={'h4'}>
                    Position
                </Typography>
            </Box>
            <ChevronRightIcon className={styles.chevron} />
        </Button>
    );
};

export default ArchitectRenderer;
