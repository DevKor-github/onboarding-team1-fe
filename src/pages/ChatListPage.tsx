import { QueryClient } from '@tanstack/react-query';
import ChatList
 from '../features/chatList/components/Chatlist';
export const chatListLoader = (queryClient: QueryClient) => async () => {
  // 채팅창 목록 로딩 전 사전 데이터 불러오기
  return null;
};

export const ChatListPage = () => {
  return (
    <>
      <h1>Chat List Route</h1>
      <ChatList/>
    </>
  );
};
