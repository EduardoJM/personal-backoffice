import api from '../../config/axios';
import { User } from '../users/types';
import { LoginResponse } from './types';

export const login = async (username: string, password: string) => {
  const { data } = await api.post<LoginResponse>('api/auth/token/', { username, password });
  return data;
};

export const getAuthenticatedUser = async () => {
  try {
    const { data } = await api.get<User>('api/users/me');
    return data;
  } catch {
    return null;
  }
};
