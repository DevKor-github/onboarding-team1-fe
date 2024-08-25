import React from "react"

interface Props{
    image: any;
    nickname: any;
    time: any;
}

const ChatRoom = ({image, nickname, time}:Props) =>{

    return(
        <div className="flex justify-between items-center w-[393px] h-[62px] py-[15px] shadow-[0_1px_0_#E5E5EA]">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"/>
            <div className="flex flex-row items-center ml-[24px]">
                <img
                    className="w-[32px] h-[32px] mr-[4px]"
                    alt="Profile Image"
                    src={image!=="" ? image : "src/features/chatList/assets/avatar.svg"}
                />
                <div className="text-[14px] text-[#2C2C2E] font-pre font-weight: 400">
                    {nickname}
                </div>
            </div>
            
            <div className="mr-[24px]">
                <div className="text-[14px] text-[#000000] font-pre font-weight: 600">
                    {time}
                </div>
            </div>
            
        </div>
        
    )

}

export default ChatRoom;