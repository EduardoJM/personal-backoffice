import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
  styled,
  OutlinedInputProps,
} from '@mui/material';
import { useField } from 'formik';
import { createInputRootStyles } from '../styles';

export type TextFieldProps = MaterialTextFieldProps;

const StyledTextField = styled(MaterialTextField)(({ theme }) => createInputRootStyles(theme));

export const TextField = (props: TextFieldProps) => {
  const { name, id, ...rest } = props;
  const [field, meta] = useField(name || id || '');

  return (
    <StyledTextField
      error={!!(meta.touched && meta.error)}
      fullWidth
      helperText={meta.touched && meta.error}
      id={id}
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      variant="filled"
      size="small"
      {...rest}
      {...field}
    />
  );
};
