import { createContext, useContext, PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsAuthenticated } from '../queries/useIsAuthenticated';
import { User } from '../../users/types';
import { LoginResponse } from '../types';
import api from '../../../config/axios';

export interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  handleLogin: (data: LoginResponse) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const authUser = useIsAuthenticated();
  const [user, setUser] = useState<User | null>(authUser.data || null);
  const navigate = useNavigate();

  const handleLogin = (data: LoginResponse): void => {
    localStorage.setItem('@GALLERY:token', data.access);
    api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
    //setUser(data.user);
    setUser({ email: '', first_name: '', id: 1, last_name: '' });
    navigate('/notes');
  };

  const handleLogout = (): void => {
    localStorage.removeItem('@GALLERY:token');
    api.defaults.headers.common['Authorization'] = undefined;
    setUser(null);
    navigate('/auth');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
