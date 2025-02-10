import { ReactElement } from 'react';
import { IconProps, SvgIconProps } from '@mui/material';

export interface InsightProps {
    icon?: ReactElement<SvgIconProps> | ReactElement<IconProps>;
    title: string;
    primaryText: string;
    secondaryText: ReactElement<{}>;
}
