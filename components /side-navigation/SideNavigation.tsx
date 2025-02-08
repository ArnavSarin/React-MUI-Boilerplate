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
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    console.log(navigationList);
    return (
        <Box className={styles.sideNavBox} id={'sideNavBox'}>
            <Drawer
                sx={{
                    '& .MuiPaper-root': {
                        visibility: 'unset !important',
                        transform: 'unset !important',
                        boxSizing: 'border-box',
                        width: '15em',
                        height: '100%',
                    },
                }}
                className={styles.sideNavDrawer}
                id={id ?? 'sideNavDrawer'}
                variant={variant ?? 'persistent'}
                anchor={anchor ?? 'left'}
                {...props}
            >
                {/*<Box>*/}
                {/*    <IconButton onClick={handleDrawerClose}>*/}
                {/*        {theme.direction === 'rtl' ? (*/}
                {/*            <ChevronLeftIcon />*/}
                {/*        ) : (*/}
                {/*            <ChevronRightIcon />*/}
                {/*        )}*/}
                {/*    </IconButton>*/}
                {/*</Box>*/}
                <List className={styles.sideNavList} id={'sideNavList'}>
                    {
                        navigationList.map((item, index) => (
                            <ListItem
                                className={styles.sideNavItem}
                                key={item.name}
                            >
                                <ListItemButton
                                    selected={selectedIndex === index}
                                    onClick={(event) =>
                                        handleListItemClick(event, index)
                                    }
                                >
                                    {item.icon &&
                                        ((<item.itemIcon />) as ReactNode)}
                                    <ListItemText primary={item.name} />
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
