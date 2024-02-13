import { MouseEvent, useEffect, useRef } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../TextField';

interface Props {
  initialValue: string;
  onSave: (value: string) => void;
  onCancel: () => void;
}

interface Fields {
  label: string;
}

export const EditableLabelForm = ({ initialValue, onSave, onCancel }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = ({ label }: Fields) => {
    onSave(label);
  };

  const handleFormClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <Formik initialValues={{ label: initialValue }} onSubmit={handleSubmit}>
      <Form onClick={handleFormClick}>
        <TextField
          name="label"
          id="label"
          inputProps={{
            onBlur: onCancel,
          }}
          inputRef={inputRef}
          hiddenLabel
        />
      </Form>
    </Formik>
  );
};
