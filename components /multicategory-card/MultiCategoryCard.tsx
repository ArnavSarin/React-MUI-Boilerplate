import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MultiCategoryCardProps } from './types';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react';
const MultiCategoryCard = ({
    categoryList,
    ...props
}: MultiCategoryCardProps) => {
    return (
        <Card {...props}>
            <CardContent>
                {categoryList.map(
                    (item, index) =>
                        (
                            <>
                                <item />
                                {index !== categoryList.length && <Divider />}
                            </>
                        ) as ReactNode
                )}
            </CardContent>
        </Card>
    );
};

export default MultiCategoryCard;
