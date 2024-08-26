import EmoticonButton from '../assets/smile_icon.svg';
import SendValidButton from '../assets/send_valid_icon.svg';
import SendInValidButton from '../assets/send_invalid_icon.svg';
import { useEffect, useState } from 'react';
import { WebSocketType, useWebSocket } from '@hooks/useWebSocket';
import { ChatProps } from '../types/chat';

const sendButtonVariants = {
  valid: 'fill-bgblue',
  invalid: '',
};

export const ChatInputField = ({
  textArray,
  setTextArray,
  websocket,
  chatRoomId,
  currentId,
}: {
  chatRoomId: string;
  currentId: number;
  textArray: ChatProps[];
  setTextArray: React.Dispatch<React.SetStateAction<ChatProps[]>>;
  websocket: WebSocketType;
}) => {
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClick = () => {
    if (text) {
      const date = new Date();
      websocket.sendMessage(JSON.stringify({ chatRoomId: chatRoomId, senderId: currentId, message: text, timestamp: date, messageType: 'TALK' }));

      setTextArray([...textArray, { text: text, isChecked: true, time: date, style: 'none', type: 'MY' }]);
      setText('');
      console.log('current', currentId);
    }
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  useEffect(() => {
    const date = new Date();
    websocket.sendMessage(JSON.stringify({ chatRoomId: chatRoomId, senderId: currentId, message: text, timestamp: date, messageType: 'ENTER' }));
  }, []);

  return (
    <div className="h-20 w-full border pb-7 pt-3">
      <div className="flex w-full items-center justify-center">
        <button className="mr-3 flex h-4 w-4 items-center">
          <EmoticonButton />
        </button>
        <div className="flex h-10 w-4/5 items-center justify-between rounded-full bg-bggray px-5">
          <input onKeyDown={onEnter} onChange={onChange} value={text} placeholder="Start typing..." className="mr-5 w-11/12 bg-transparent text-sm font-normal text-label3 focus:outline-none"></input>
          <button onClick={onClick} className={`${text ? sendButtonVariants.valid : sendButtonVariants.invalid} fill-blue h-4 w-4`}>
            {text ? <SendValidButton /> : <SendInValidButton />}
          </button>
        </div>
      </div>
    </div>
  );
};
