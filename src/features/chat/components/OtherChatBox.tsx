import { formatTimeByDate } from '@utils/date';
import { RoundProfile } from './RoundProfile';

const tailVariants = {
  tail: "before:relative before:ml-[-0.7rem] before:border-[0.7rem] before:border-r-0 before:border-t-[0.7rem] before:border-transparent before:border-l-transparent before:border-t-bggray before:content-['']",
  none: '',
};

const boxVariants = {
  tail: 'rounded-r-lg rounded-bl-lg',
  none: 'rounded-lg ml-8',
};

type ChatProps = {
  text: string;
  isChecked?: boolean;
  time: Date;
  style: 'tail' | 'none';
  profileImgUrl?: string;
  name?: string;
};

export const OtherChatBox = (chatProps: ChatProps) => {
  return (
    <div className="mb-3 mt-3 flex w-full justify-start">
      <div className="ml-6 mr-3">{chatProps.style === 'tail' ? <RoundProfile imgUrl={chatProps.profileImgUrl} size="small" /> : null}</div>
      <div className={`${tailVariants[chatProps.style]} flex`}>
        <div className={`${boxVariants[chatProps.style]} inline-flex min-h-16 min-w-24 max-w-64 bg-bggray px-2 py-1 text-base`}>
          <div className="w-full">
            <div className="text-sm font-semibold text-label1">{chatProps.name}</div>
            <div className="mt-1 text-sm font-normal text-label1">{chatProps.text}</div>
            <div className="mt-2 flex justify-end text-xs font-light text-label3">{formatTimeByDate(chatProps.time)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
