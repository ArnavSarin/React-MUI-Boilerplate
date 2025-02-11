import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MultiCategoryCardProps } from './types';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import styles from './MultiCategoryCard.module.scss';

const MultiCategoryCard = ({
    direction,
    spacing,
    categoryList,
    ...props
}: MultiCategoryCardProps) => {
    return (
        <Card {...props}>
            <CardContent className={styles.cardContent}>
                <Stack
                    direction={direction ?? 'row'}
                    spacing={spacing ?? 2}
                    styles={styles.contentContainer}
                >
                    {categoryList.map(
                        (item, index) =>
                            (
                                <>
                                    {item && item}
                                    {index !== categoryList.length - 1 && (
                                        <Divider
                                            orientation={
                                                (direction &&
                                                    direction === 'column') ||
                                                direction === 'column-reverse'
                                                    ? 'horizontal'
                                                    : 'vertical'
                                            }
                                            variant="middle"
                                        />
                                    )}
                                </>
                            ) as ReactNode
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default MultiCategoryCard;
