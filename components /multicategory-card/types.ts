import { CardProps, StackProps } from '@mui/material';
import { ReactElement } from 'react';

export interface MultiCategoryCardProps extends CardProps, StackProps {
    categoryList: ReactElement<{}>[];
}
