import React from "react";
import LogoM from "../../login/components/LogoM";
import ChatRoom from "./ChatRoom";

const ChatList: React.FC<{}>=()=>{
    return(
        <div className='bg-yellow-100 h-screen flex justify-center'>
            <div className='bg-white w-[393px] h-[852px] relative'>
                <div className="w-[393px] h-[54px]"></div> {/*status bar*/}
                <div className="w-[393px] h-[37px] px-[20px] py-[10px]">
                    <LogoM size="vector-1.svg" fontSize={17}></LogoM>
                </div>
                <div className="w-[393px] h-[48px] px-[24px] py-[15px]
                text-[18px] text-[#2C2C2E] font-Pretendard font-weight: 600                ">
                    채팅
                </div>
                <div className="bg-[#FAFAFA] w-[390px] h-[10px] border border-[#F5F5F5] border-width-y[1px]"></div>
                <div>
                    <ul>
                        {testData.users.map((user)=>{
                            return(
                                <li key={user.email}>
                                <ChatRoom nickname={user.nickname} time="오후 8:00" image=""></ChatRoom>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
        
    );
    
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