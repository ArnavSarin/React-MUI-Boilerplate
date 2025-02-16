import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from './types';
import { useController, useForm, useFormContext } from 'react-hook-form';
import { mergeRefs } from 'react-merge-refs';

const TextField = ({
    name,
    variant,
    size,
    helperText,
    fullWidth,
    ref, //CONTROLLER PROPS BELOW
    value,
    onChange,
    onBlur,
    ...props
}: TextFieldProps) => {
    const { control } = useFormContext() ?? useForm();

    const {
        field,
        fieldState: { error },
    } = useController({
        name: name,
        control: control,
    });

    return (
        <MuiTextField
            name={name}
            variant={variant ?? 'outlined'}
            size={size ?? 'small'}
            fullWidth={fullWidth ?? true}
            error={!!error}
            helperText={error?.message}
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
