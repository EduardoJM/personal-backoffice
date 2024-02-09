import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnonymousGuard } from './components';

const Login = lazy(() => import('./pages/Login'));

const Router = () => {
  return (
    <AnonymousGuard>
      <Routes>
        <Route path="" Component={Login} />
      </Routes>
    </AnonymousGuard>
  );
};

export default Router;
