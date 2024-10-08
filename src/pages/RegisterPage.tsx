import MainLogo from '@assets/main_logo.svg';

import { RegisterForm } from '@features/register/components/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className="flex h-screen w-1/3 min-w-96 max-w-2xl flex-col items-center border bg-white pt-[15vh]">
      <div className="h-14 w-60">
        <MainLogo />
      </div>
      <RegisterForm />
    </div>
  );
};
