import React from 'react';
import LogoM from '../../login/components/LogoM';
import MainLogo from '@assets/main_logo.svg';
import ChatRoom from './ChatRoom';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../login/api/api';

const ChatList = (data: any) => {
  const navigate = useNavigate();

  const handleChatRoomClick = (currentUserId: any, userId: any) => {
    api
      .get(import.meta.env.VITE_API_URL + `/chat/${currentUserId}/${userId}`)
      .then((response) => {
        navigate(`/chat/${currentUserId}/${userId}`);
      })
      .catch((error) => {
        //window.location.reload();
        console.error("Errer accessing chat room:', error");
      });
  };

  if (!data || data.data.length === 0) {
    console.log('no data');
    return (
      <>
        <div>Access Token Error!</div>
        <Link to="http://localhost:5173/login">Go home</Link>
      </>
    );
  } else {
    return (
      <div className="flex h-screen justify-center bg-yellow-100">
        <div className="relative h-[852px] w-[393px] bg-white">
          <div className="h-[54px] w-[393px]"></div> {/*status bar*/}
          <div className="my-3 ml-5 w-20">
            <MainLogo />
          </div>
          <div className="font-pre font-weight: 600 h-[48px] w-[393px] px-[24px] py-[15px] text-[18px] text-[#2C2C2E]">채팅</div>
          <div className="border-width-y[1px] h-[10px] w-[390px] border border-[#F5F5F5] bg-[#FAFAFA]"></div>
          {
            <ul>
              {data.data.users.map((user: any) => {
                return (
                  <li key={user.email}>
                    <button onClick={() => handleChatRoomClick(data.data.currentUser.id, user.id)}>
                      <ChatRoom nickname={user.nickname} time="오후 8:00" image={user.profileImg}></ChatRoom>
                    </button>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    );
  }
};

export default ChatList;
