import * as yup from 'yup';
import { InferType } from 'yup';
import { reqError } from './Error';

export const ApplicationSchema = yup.object().shape({
    FullName: yup.string().required(reqError('Full Name')),
    Email: yup.string().email().required(reqError('Email')),
    PhoneNumber: yup.string().required(reqError('Phone Number')),
});

export type Application = InferType<typeof ApplicationSchema>;
