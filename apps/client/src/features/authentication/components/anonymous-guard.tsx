import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts';

export const AnonymousGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return children;
  }

  return <Navigate to="/notes" />;
};
