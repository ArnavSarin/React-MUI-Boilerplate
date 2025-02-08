import { DrawerProps } from '@mui/material/Drawer/Drawer';
import React from 'react';

export interface SideNavigationItem {
    name: string;
    icon?: React.ComponentType<{}>;
    // itemIcon: React.ReactElement;
    // itemIcon: React.ComponentType<{ className?: string }>;
    // itemIcon: React.ReactNode;
}

export interface SideNavigationProps extends DrawerProps {
    navigationList: SideNavigationItem[];
    sideNavChildren: React.ReactNode;
}
