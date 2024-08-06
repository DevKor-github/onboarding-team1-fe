import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppRoot = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
