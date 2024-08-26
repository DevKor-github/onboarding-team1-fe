import { Form } from 'react-router-dom';
import Login from '../features/login/components/Login';

export const LoginPage = () => {
  return (
    <div className="flex h-screen w-1/3 min-w-96 max-w-2xl flex-col border">
      <Login />
    </div>
  );
};
