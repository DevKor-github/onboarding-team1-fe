import { QueryClient } from '@tanstack/react-query';

export const chatLoader = (queryClient: QueryClient) => async () => {
  // 채팅창 로딩 전 사전 데이터 불러오기
  return null;
};

export const ChatRoute = () => {
  return (
    <>
      <h1>Chat Route</h1>
    </>
  );
};
