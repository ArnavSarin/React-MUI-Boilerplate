import * as yup from 'yup';
import { InferType } from 'yup';
import { reqError } from './Error';

export const BusinessAddressSchema = yup.object().shape({
    BusinessName: yup.string().required(reqError('Business Name')),
});

export type BusinessAddress = InferType<typeof BusinessAddressSchema>;
