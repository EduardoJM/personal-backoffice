import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticatedGuard } from '../authentication/components';

const NotesLayout = lazy(() => import('./components/NotesLayout'));
const NotesHome = lazy(() => import('./pages/NotesHome'));
const NotesEdit = lazy(() => import('./pages/NotesEdit'));

const Router = () => {
  return (
    <AuthenticatedGuard>
      <Routes>
        <Route path="" element={<NotesLayout />}>
          <Route path="" element={<NotesHome />} />
          <Route path=":id" element={<NotesEdit />} />
        </Route>
      </Routes>
    </AuthenticatedGuard>
  );
};

export default Router;
