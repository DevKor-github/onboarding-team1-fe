import EmoticonButton from '../assets/smile_icon.svg';
import SendValidButton from '../assets/send_valid_icon.svg';
import SendInValidButton from '../assets/send_invalid_icon.svg';
import { useState } from 'react';

const sendButtonVariants = {
  valid: 'fill-bgblue',
  invalid: '',
};

export const ChatInputField = () => {
  const [text, setText] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="h-20 w-full border pb-7 pt-3">
      <div className="flex w-full items-center justify-center">
        <button className="mr-3 flex h-4 w-4 items-center">
          <EmoticonButton />
        </button>
        <div className="flex h-10 w-4/5 items-center justify-between rounded-full bg-bggray px-5">
          <input onChange={onChange} placeholder="Start typing..." className="mr-5 w-11/12 bg-transparent text-sm font-normal text-label3 focus:outline-none"></input>
          <button className={`${text ? sendButtonVariants.valid : sendButtonVariants.invalid} fill-blue h-4 w-4`}>{text ? <SendValidButton /> : <SendInValidButton />}</button>
        </div>
      </div>
    </div>
  );
};
