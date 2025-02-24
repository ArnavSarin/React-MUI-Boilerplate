import * as yup from 'yup';
import { InferType } from 'yup';
import { reqError } from './Error';

export const LoginInformationSchema = yup.object().shape({
    Username: yup.string().required(reqError('Username')),
});

export type LoginInformation = InferType<typeof LoginInformationSchema>;
