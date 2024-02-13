import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
  styled,
  OutlinedInputProps,
} from '@mui/material';
import { createInputRootStyles } from '../../forms/styles';

export type QueryTextFieldProps = MaterialTextFieldProps & {
  queryName: string;
  initialValue?: string;
};

const StyledTextField = styled(MaterialTextField)(({ theme }) => createInputRootStyles(theme));

export const QueryTextField = (props: QueryTextFieldProps) => {
  const [value, setValue] = useState(props.initialValue || '');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSearch = new URLSearchParams(searchParams);
      newSearch.set(props.queryName, value);
      setSearchParams(newSearch);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value, searchParams]);

  return (
    <StyledTextField
      fullWidth
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      variant="filled"
      size="small"
      value={value}
      onChange={e => setValue(e.target.value)}
      {...props}
    />
  );
};
