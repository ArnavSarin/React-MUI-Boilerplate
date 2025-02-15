import { ReactElement } from 'react';
import { IconProps, SvgIconProps } from '@mui/material';

export interface InsightProps {
    title: string;
    primaryText: string;
    secondaryText: ReactElement<{}>;
    icon?: ReactElement<SvgIconProps> | ReactElement<IconProps>;
}
