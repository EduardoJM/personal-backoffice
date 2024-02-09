import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AuthRoutes = lazy(() => import('./features/authentication/router'));
const NotesRoutes = lazy(() => import('./features/notes/router'));

const Router = () => {
  return (
    <Routes>
      <Route path="/auth/*" Component={AuthRoutes} />
      <Route path="/notes/*" Component={NotesRoutes} />
      <Route path="" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default Router;
