import * as yup from 'yup';
import { EnterpriseApplSchema } from './EnterpriseApplSchema';
import { InferType } from 'yup';

export const MasterSchema = yup.object().shape({}).concat(EnterpriseApplSchema);

export type BaseSchema = InferType<typeof MasterSchema>;
