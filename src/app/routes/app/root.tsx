import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppRoot = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex h-screen w-screen justify-center bg-yellow-100">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
