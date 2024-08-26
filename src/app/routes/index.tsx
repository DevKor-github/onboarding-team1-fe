import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoot } from './app/root';
import { chatLoader } from '../../pages/ChatPage';
import { chatListLoader } from '../../pages/ChatListPage';

export const createRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: '/login',
      lazy: async () => {
        const { LoginPage } = await import('../../pages/LoginPage');
        return {
          Component: LoginPage,
        };
      },
    },
    {
      path: '/register',
      lazy: async () => {
        const { RegisterPage } = await import('../../pages/RegisterPage');
        return {
          Component: RegisterPage,
        };
      },
    },
    {
      path: '/',
      element: <AppRoot />, //여기에 로그인 여부 확인하는 컴포넌트로 감싸기
      children: [
        {
          path: 'chatList',
          lazy: async () => {
            const { ChatListPage } = await import('../../pages/ChatListPage');
            return {
              Component: ChatListPage,
            };
          },
          loader: chatListLoader(queryClient),
        },
        {
          path: 'chat',
          lazy: async () => {
            const { ChatPage } = await import('../../pages/ChatPage');
            return {
              Component: ChatPage,
            };
          },
          loader: chatLoader(queryClient),
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundPage } = await import('../../pages/NotFoundPage');
        return { Component: NotFoundPage };
      },
    },
  ]);
};
