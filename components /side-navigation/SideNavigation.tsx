import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { SideNavigationProps } from './types';
import React, { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import styles from './SideNavigation.module.scss';

const SideNavigation = ({
    navigationList,
    id,
    variant,
    anchor,
    open,
    sideNavChildren,
    ...props
}: SideNavigationProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Box className={styles.sideNavBox} id={'sideNavBox'}>
            <Drawer
                className={styles.sideNavDrawer}
                id={id ?? 'sideNavDrawer'}
                variant={variant ?? 'persistent'}
                anchor={anchor ?? 'left'}
                {...props}
            >
                <Box>
                    {/*<IconButton onClick={handleDrawerClose}>*/}
                    {/*    {theme.direction === 'rtl' ? (*/}
                    {/*        <ChevronLeftIcon />*/}
                    {/*    ) : (*/}
                    {/*        <ChevronRightIcon />*/}
                    {/*    )}*/}
                    {/*</IconButton>*/}
                </Box>
                <List className={styles.sideNavList} id={'sideNavList'}>
                    {
                        navigationList.map((item, index) => (
                            <ListItem
                                className={styles.sideNavItem}
                                key={item.name}
                            >
                                <ListItemButton
                                    key={index}
                                    selected={selectedIndex === index}
                                    onClick={() => handleListItemClick(index)}
                                >
                                    {item.icon &&
                                        ((<item.icon />) as ReactNode)}
                                    <ListItemText
                                        className={styles.itemText}
                                        primary={item.name}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )) as ReactNode[]
                    }
                </List>
            </Drawer>
            {sideNavChildren}
        </Box>
    );
};

export default SideNavigation;
