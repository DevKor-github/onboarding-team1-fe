import { QueryClient } from '@tanstack/react-query';
import ChatList from '../features/chatList/components/Chatlist';
import TokenService from '../features/login/api/token.service';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import api from '../features/login/api/api.ts'
import { useEffect, useState} from 'react';
export const chatListLoader = (queryClient: QueryClient) => async () => {
  // 채팅창 목록 로딩 전 사전 데이터 불러오기
  return null;
};

export const ChatListPage = () => {
  const [chatListData, setChatListData] = useState([]);
  const accesToken = TokenService.getLocalAccessToken();

  const url = `http://springboot-developer-env.eba-tb7bgpjh.ap-northeast-2.elasticbeanstalk.com/chat/list?token=${accesToken}`;

  useEffect(()=>{
    api.get(url)
    .then((response)=>{
      console.log(response.data);
      setChatListData(response.data);
    })
    .catch((error)=>{
      console.error("Error fetching chat list:", error);
    });
  }, [url]);

  console.log(chatListData);
  return (
    <>
      <ChatList data={chatListData}/>
    </>
  );
};

export default ChatListPage;