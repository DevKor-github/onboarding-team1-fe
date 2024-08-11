import { RoundProfile } from './RoundProfile';

export const ChatHeader = ({ userName, imgUrl }: { userName: string; imgUrl: string }) => {
  return (
    <header className="h-32 shadow">
      <div className="flex h-16 items-center px-6">DEVKOR LOGO</div>
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <RoundProfile imgUrl={imgUrl} />
          <div className="mx-2">{userName}</div>
        </div>
        <>dots</>
      </div>
    </header>
  );
};
