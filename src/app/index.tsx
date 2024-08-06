import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { createRouter } from './routes';
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './MainProvider';

const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
