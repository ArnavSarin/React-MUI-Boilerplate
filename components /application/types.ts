import * as Yup from 'yup';
import { FieldValues } from 'react-hook-form';
import { ReactElement } from 'react';
import { IconProps, SvgIconProps } from '@mui/material';

export interface BaseApplicationPageProps<TFieldValues extends FieldValues> {
    title: string;
    icon: ReactElement<SvgIconProps> | ReactElement<IconProps>;
    children: ReactElement<{}>;
    schema:
        | Yup.ObjectSchema<TFieldValues>
        | ReturnType<typeof Yup.lazy<Yup.ObjectSchema<TFieldValues>>>;
}

export interface ApplicationPageProps extends BaseApplicationPageProps<any> {
    page: number;
    totalPages: number;
    onSubmit: (data: any) => any;
    onPrev: () => any;
}

export interface ApplicationProps<TFieldValues extends FieldValues> {
    applicationList: BaseApplicationPageProps<any>[];
}
