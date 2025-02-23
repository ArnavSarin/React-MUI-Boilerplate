import * as Yup from 'yup';
import { FieldValues } from 'react-hook-form';
import { ReactElement } from 'react';
import { IconProps, SvgIconProps } from '@mui/material';

export interface ApplicationPageProps {
    title: string;
    icon: ReactElement<SvgIconProps> | ReactElement<IconProps>;
    children: ReactElement<{}>;
}

export interface ApplicationProps<TFieldValues extends FieldValues> {
    schema:
        | Yup.ObjectSchema<TFieldValues>
        | ReturnType<typeof Yup.lazy<Yup.ObjectSchema<TFieldValues>>>;
    applicationList: ApplicationPageProps[];
}
