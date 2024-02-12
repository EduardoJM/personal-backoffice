import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@backoffice/ui';
import { useQueryDialog } from '@backoffice/hooks';
import { useCreateNote } from '../../mutations/useCreateNote';

interface Fields {
  title: string;
}

export const AddNoteDialog = () => {
  const { isOpen, onClose } = useQueryDialog('add');
  const createNote = useCreateNote();

  const handleSubmit = ({ title }: Fields) => {
    createNote.mutate({ title }, { onSuccess: onClose });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle>Adicionar Anotação</DialogTitle>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{ title: '' }}
        validationSchema={yup.object({
          title: yup
            .string()
            .required('Insira um título para a anotação')
            .min(3, 'Insira pelo menos 3 caractéres')
            .max(150, 'Máximo de 150 caractéres'),
        })}
      >
        <Form noValidate>
          <DialogContent>
            <TextField required id="title" name="title" label="Título" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="submit">Adicionar</Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
