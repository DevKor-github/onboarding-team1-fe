import { QueryClient } from '@tanstack/react-query';

export const chatListLoader = (queryClient: QueryClient) => async () => {
  // 채팅창 목록 로딩 전 사전 데이터 불러오기
  return null;
};

export const ChatListRoute = () => {
  return (
    <>
      <h1>Chat List Route</h1>
    </>
  );
};
