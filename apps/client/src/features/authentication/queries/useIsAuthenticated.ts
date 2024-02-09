import { useQuery } from 'react-query';
import api from '../../../config/axios';
import { getAuthenticatedUser } from '../services';

export const useIsAuthenticated = () => {
  return useQuery('is-authenticated', {
    queryFn: async () => {
      const token = localStorage.getItem('@GALLERY:token');
      if (!token) {
        return null;
      }

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try {
        return getAuthenticatedUser();
      } catch {
        localStorage.removeItem('@GALLERY:token');
        api.defaults.headers.common['Authorization'] = undefined;
        return null;
      }
    },
    cacheTime: 0,
    retry: false,
  });
};
