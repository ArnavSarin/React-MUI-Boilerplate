import Box from '@mui/material/Box';
import { CustomCellRendererProps } from 'ag-grid-react';
import { StatusTypes } from './types';
import { Typography } from '@mui/material';
import styles from './StatusRenderer.module.scss';

const StatusRenderer = (params: CustomCellRendererProps) => {
    let color: string;
    let textColor: string = '#FFFFFF';
    let stroke: string;

    if (params.value === StatusTypes.INACTIVE) {
        color = '#D24747';
    } else if (params.value === StatusTypes.ACTIVE) {
        color = '#88917C';
    } else if (params.value === StatusTypes.OPENFORBIDS) {
        color = '#EDE0D0';
        textColor = stroke = '#E2B281';
        stroke = '1px solid ' + stroke;
    } else {
        color = '#F8F9FE';
        textColor = stroke = '#ACB2A3';
        stroke = '1px solid ' + stroke;
    }

    return (
        <Box
            className={styles.statusContainer}
            sx={{ backgroundColor: color, border: stroke }}
        >
            <Typography variant={'h3'} sx={{ color: textColor }}>
                {params.value}
            </Typography>
        </Box>
    );
};

export default StatusRenderer;
