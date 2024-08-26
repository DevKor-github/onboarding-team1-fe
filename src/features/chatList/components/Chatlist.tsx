import React from "react";
import LogoM from "../../login/components/LogoM";
import ChatRoom from "./ChatRoom";
import { Link, useNavigate } from "react-router-dom";
import api from '../../login/api/api';

const ChatList=(data:any)=>{
  
  const navigate = useNavigate();

  const handleChatRoomClick = (currentUserId, userId)=>{
    api.get(`http://localhost:8080/chat/${currentUserId}/${userId}`)
      .then(response=>{
        window.location.href = `http://localhost:8080/chat/${currentUserId}/${userId}`;
        //navigate(`/chat/${currentUserId}/${userId}`);
      })
      .catch(error=>{
        window.location.reload();
        console.error("Errer accessing chat room:', error");
      })
  }

  if(!data || data.data.length===0){
    console.log("no data");
    return(
      <>
        <div>Access Token Error!</div>
        <Link to="http://localhost:5173/login">Go home</Link>
      </>
      
    ) 
  }
  else{
    return(
      <div className='bg-yellow-100 h-screen flex justify-center'>
        <div className='bg-white w-[393px] h-[852px] relative'>
          <div className="w-[393px] h-[54px]"></div> {/*status bar*/}
          <div className="w-[393px] h-[37px] px-[20px] py-[10px]">
              <LogoM size="vector-1.svg" fontSize={17}></LogoM>
          </div>
          <div className="w-[393px] h-[48px] px-[24px] py-[15px]
          text-[18px] text-[#2C2C2E] font-pre font-weight: 600                ">
              채팅
          </div>
          <div className="bg-[#FAFAFA] w-[390px] h-[10px] border border-[#F5F5F5] border-width-y[1px]"></div>
            {
              <ul>
              {
                data.data.users.map((user)=>{
                return(
                  <li key={user.email}>
                    <button onClick={()=>handleChatRoomClick(data.data.currentUser.id, user.id)}>
                      <ChatRoom nickname={user.nickname} time="오후 8:00" image={user.profileImg}></ChatRoom>
                    </button>
                  </li>
                )})}
              </ul>
            }
          </div>
      </div>
    );
  }
  
    
}

export default ChatList;

let testData = 
{
  "currentUser": {
    "id": 1,
    "nickname": "현재 사용자 이름",
    "email": "currentuser@example.com"
  },
  "users": [
    {
      "id": 2,
      "nickname": "사용자1",
      "email": "user1@example.com"
    },
    {
      "id": 3,
      "nickname": "사용자2",
      "email": "user2@example.com"
    },
    {
      "id": 4,
      "nickname": "사용자3",
      "email": "user3@example.com"
    }
  ]
};