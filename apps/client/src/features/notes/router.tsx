import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticatedGuard } from '../authentication/components';

const Notes = lazy(() => import('./pages/Notes'));

const Router = () => {
  return (
    <AuthenticatedGuard>
      <Routes>
        <Route path="" Component={Notes} />
      </Routes>
    </AuthenticatedGuard>
  );
};

export default Router;
