import { DrawerProps } from '@mui/material/Drawer/Drawer';
import { ReactElement, ReactNode } from 'react';

export interface SideNavigationItem {
    name: string;
    icon?: ReactElement<{}>;
    // icon?: ComponentType<{}>;
}

export interface SideNavigationProps extends DrawerProps {
    navigationList: SideNavigationItem[];
    sideNavChildren: ReactNode;
    logoBox?: ReactElement<{}>;
}
