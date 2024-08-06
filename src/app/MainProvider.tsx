import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { queryClient } from '../lib/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};
