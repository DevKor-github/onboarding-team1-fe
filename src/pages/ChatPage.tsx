import { QueryClient } from '@tanstack/react-query';
import { useWebSocket } from '@hooks/useWebSocket';
import { ChatHeader } from '@features/chat/components/ChatHeader';
import { MyChatBox } from '@features/chat/components/MyChatBox';
import { OtherChatBox } from '@features/chat/components/OtherChatBox';
import { ChatInputField } from '@features/chat/components/ChatInputField';
import { useEffect, useState } from 'react';
import { ChatProps } from '@features/chat/types/chat';
import { useLocation, useParams } from 'react-router-dom';

export const chatLoader = (queryClient: QueryClient) => async () => {
  // 채팅창 로딩 전 사전 데이터 불러오기
  return null;
};

export const ChatPage = () => {
  const { chatRoomId, userId } = useParams();
  const websocket = useWebSocket('/chat?chatRoomId=' + chatRoomId);
  const [textArray, setTextArray] = useState<ChatProps[]>([]);
  const date = new Date();
  const location = useLocation();

  useEffect(() => {
    if (websocket.message) {
      const date = new Date();
      const chatData = JSON.parse(websocket.message);
      if (chatData.messageType === 'TALK' && chatData.senderId !== userId) setTextArray([...textArray, { text: chatData.message, time: date, type: 'OTHER' }]);
    }
  }, [websocket.message]);

  return (
    <div className="flex h-screen w-1/3 min-w-96 max-w-2xl flex-col border bg-white">
      <ChatHeader userName={location.state.nickname} imgUrl={location.state.profileImg} />
      <div className="flex-1 overflow-y-scroll scrollbar-hide">
        {textArray.map((chat, index) => {
          const style = index != 0 && textArray[textArray.length - 1].type === chat.type ? 'none' : 'tail';
          if (chat.type === 'MY') return <MyChatBox style={style} text={chat.text} time={date} isChecked={false} key={'mychat' + index} />;
          else return <OtherChatBox profileImgUrl={location.state.profileImg} style={style} text={chat.text} time={date} key={'otherchat' + index} />;
        })}
      </div>
      <ChatInputField websocket={websocket} textArray={textArray} setTextArray={setTextArray} chatRoomId={chatRoomId || ''} currentId={Number(userId) || 0} />
    </div>
  );
};
