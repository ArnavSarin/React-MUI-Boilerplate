import { CardProps } from '@mui/material';
import React from 'react';

export interface MultiCategoryCardProps extends CardProps {
    categoryList: React.ComponentType<{}>[];
}
