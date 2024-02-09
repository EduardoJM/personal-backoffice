import { useMutation } from 'react-query';
import { useAuth } from '../../authentication/contexts';
import { login } from '../services';
import { LoginResponse } from '../types';

interface Variables {
  username: string;
  password: string;
}

export const useLogin = () => {
  const { handleLogin } = useAuth();

  return useMutation<LoginResponse, unknown, Variables>({
    mutationFn: ({ username, password }) => {
      return login(username, password);
    },
    onSuccess: handleLogin,
  });
};
