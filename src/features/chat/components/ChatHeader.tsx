import { RoundProfile } from './RoundProfile';
import MainLogo from '@assets/main_logo.svg';
import SettingButton from '../assets/dots_icon.svg';
import { useNavigate } from 'react-router-dom';

export const ChatHeader = ({ userName, imgUrl }: { userName: string; imgUrl: string }) => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col shadow">
      <div className="my-3 ml-5 w-20 cursor-pointer" onClick={() => navigate('/chatlist')}>
        <MainLogo />
      </div>
      <div className="my-4 flex h-8 items-center justify-between px-6">
        <div className="flex items-center">
          <RoundProfile imgUrl={imgUrl} size="small" />
          <div className="mx-2">{userName}</div>
        </div>
        <button className="h-4 w-4">
          <SettingButton />
        </button>
      </div>
    </header>
  );
};
