import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MultiCategoryCardProps } from './types';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react';
import { Stack } from '@mui/material';
const MultiCategoryCard = ({
    direction,
    spacing,
    categoryList,
    ...props
}: MultiCategoryCardProps) => {
    return (
        <Card {...props}>
            <CardContent sx={{ width: '100%', height: '100%' }}>
                <Stack
                    direction={direction ?? 'row'}
                    spacing={spacing ?? 2}
                    sx={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
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
