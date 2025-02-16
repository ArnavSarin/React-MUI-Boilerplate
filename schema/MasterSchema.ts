import * as yup from 'yup';
import { ApplicationSchema } from './ApplicationSchema';
import { InferType } from 'yup';

export const MasterSchema = yup.object().shape({}).concat(ApplicationSchema);

export type BaseSchema = InferType<typeof MasterSchema>;
