import * as yup from 'yup';
import { IdentityContactSchema } from './IdentityContactSchema';
import { InferType } from 'yup';
import { BusinessAddressSchema } from './BusinessAddressSchema';

export const MasterSchema = yup
    .object()
    .shape({})
    .concat(IdentityContactSchema)
    .concat(BusinessAddressSchema);

export type BaseSchema = InferType<typeof MasterSchema>;
