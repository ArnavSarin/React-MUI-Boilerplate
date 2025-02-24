import * as yup from 'yup';
import { InferType } from 'yup';
import { reqError } from './Error';

export const IdentityContactSchema = yup.object().shape({
    FirstName: yup.string().required(reqError('First Name')),
    LastName: yup.string().required(reqError('Last Name')),
    Position: yup.string().required(reqError('Position')),
    Email: yup.string().email().required(reqError('Email')),
    PhoneNumber: yup.string().required(reqError('Phone Number')),
});

export type IdentityContact = InferType<typeof IdentityContactSchema>;
