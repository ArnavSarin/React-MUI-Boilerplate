import * as yup from 'yup';
import { InferType } from 'yup';
import { reqError } from './Error';

export const BusinessAddressSchema = yup.object().shape({
    BusinessName: yup.string().required(reqError('Business Name')),
    AddressLine1: yup.string().required(reqError('Address')),
    AddressLine2: yup.string().optional(),
    City: yup.string().required(reqError('City')),
    StateProvinceRegion: yup
        .string()
        .required(reqError('State/Province/Region')),
    Country: yup.string().required(reqError('Country')),
});

export type BusinessAddress = InferType<typeof BusinessAddressSchema>;
