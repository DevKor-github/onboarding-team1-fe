import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoot } from './app/root';
import { chatLoader } from './ChatRoute';
import { chatListLoader } from './ChatListRoute';

export const createRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: '/login',
      lazy: async () => {
        const { LoginRoute } = await import('./LoginRoute');
        return {
          Component: LoginRoute,
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
            const { ChatListRoute } = await import('./ChatListRoute');
            return {
              Component: ChatListRoute,
            };
          },
          loader: chatListLoader(queryClient),
        },
        {
          path: 'chat',
          lazy: async () => {
            const { ChatRoute } = await import('./ChatRoute');
            return {
              Component: ChatRoute,
            };
          },
          loader: chatLoader(queryClient),
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./NotFoundRoute');
        return { Component: NotFoundRoute };
      },
    },
  ]);
};
