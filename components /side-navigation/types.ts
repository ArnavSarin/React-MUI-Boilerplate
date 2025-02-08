import { DrawerProps } from '@mui/material/Drawer/Drawer';
import React from 'react';

export interface SideNavigationItem {
    name: string;
    icon?: React.ComponentType<{}>;
}

export interface SideNavigationProps extends DrawerProps {
    navigationList: SideNavigationItem[];
    sideNavChildren: React.ReactNode;
}
