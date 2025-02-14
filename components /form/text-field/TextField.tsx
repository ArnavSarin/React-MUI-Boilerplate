import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from './types';
import { useController, useForm } from 'react-hook-form';
import { mergeRefs } from 'react-merge-refs';

const TextField = ({
    name,
    variant,
    helperText,
    fullWidth,
    ref, //CONTROLLER PROPS BELOW
    value,
    onChange,
    onBlur,
    ...props
}: TextFieldProps) => {
    const {
        control,
        formState: { errors },
    } = useForm();

    const { field } = useController({
        name: name,
        control,
    });

    return (
        <MuiTextField
            name={name}
            variant={variant ?? 'outlined'}
            fullWidth={fullWidth ?? true}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
            ref={ref ? mergeRefs([field.ref, ref]) : field.ref}
            value={field.value}
            onChange={(event) => {
                if (onChange) {
                    onChange(event);
                }
                return field.onChange(event);
            }}
            onBlur={(event) => {
                if (onBlur) {
                    onBlur(event);
                }
                return field.onBlur();
            }}
            {...props}
        />
    );
};

export default TextField;
