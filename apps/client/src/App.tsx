import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './features/authentication/contexts';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <AuthProvider>
            <CssBaseline />

            <Router />
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
