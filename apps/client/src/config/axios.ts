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
      localStorage.removeItem('@BOFFICE:refresh');
      sessionStorage.removeItem('@BOFFICE:refresh');
      return Promise.reject(error);
    }
    let token: string | null = null;
    if (localStorage.getItem('@BOFFICE:refresh')) {
      token = localStorage.getItem('@BOFFICE:refresh');
    } else if (sessionStorage.getItem('@BOFFICE:refresh')) {
      token = sessionStorage.getItem('@BOFFICE:refresh');
    }
    if (!token) {
      return Promise.reject(error);
    }
    api.defaults.headers.common['Authorization'] = '';
    try {
      const data = await refreshToken(token);
      console.log(data);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      return api.request({
        ...error.response.config,
        headers: {
          ...error.response.config.headers,
          Authorization: `Bearer ${data.access}`,
        },
      });
    } catch {
      localStorage.removeItem('@BOFFICE:refresh');
      sessionStorage.removeItem('@BOFFICE:refresh');
    }
  }
);

export default api;
