import axios from 'axios';
import { refreshToken } from '../features/authentication/services';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status !== 401) {
      Promise.reject(error);
    }
    if (String(error.response.config.url).includes('auth/token/refresh')) {
      localStorage.removeItem('@TUNELATOR_REFRESH');
      sessionStorage.removeItem('@TUNELATOR_REFRESH');
      return Promise.reject(error);
    }
    let token: string | null = null;
    if (localStorage.getItem('@TUNELATOR_REFRESH')) {
      token = localStorage.getItem('@TUNELATOR_REFRESH');
    } else if (sessionStorage.getItem('@TUNELATOR_REFRESH')) {
      token = sessionStorage.getItem('@TUNELATOR_REFRESH');
    }
    if (!token) {
      return Promise.reject(error);
    }
    api.defaults.headers.common['Authorization'] = '';
    try {
      const data = await refreshToken(token);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      return api.request({
        ...error.response.config,
        headers: {
          ...error.response.config.headers,
          Authorization: `Bearer ${data.access}`,
        },
      });
    } catch {
      localStorage.removeItem('@TUNELATOR_REFRESH');
      sessionStorage.removeItem('@TUNELATOR_REFRESH');
    }
  }
);

export default api;
