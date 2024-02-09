import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useLogin } from '../mutations/useLogin';
import { TextField } from '@backoffice/ui';

interface Fields {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup
    .string()
    //.email('Insira um e-mail válido.')
    .required('E-mail é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
});

const initialValues = { username: '', password: '' };

const Login = () => {
  const loginMutation = useLogin();

  const handleSubmit = (data: Fields) => {
    loginMutation.mutate(data);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={schema}>
      <Form>
        <TextField name="username" id="username" label="Nome de Usuário" />
        <TextField type="password" name="password" id="password" label="Senha" />

        <button type="submit">Enviar?</button>
      </Form>
    </Formik>
  );
};

export default Login;
