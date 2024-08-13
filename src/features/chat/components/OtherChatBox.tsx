import { formatTimeByDate } from '../../../utils/date';

const tailVariants = {
  tail: "before:relative before:ml-[-1rem] before:border-[1rem] before:border-r-0 before:border-t-[1rem] before:border-transparent before:border-l-transparent before:border-t-gray-200 before:content-['']",
  none: '',
};

const boxVariants = {
  tail: 'rounded-r-lg rounded-bl-lg',
  none: 'rounded-lg',
};

type ChatProps = {
  text: string;
  isChecked?: boolean;
  time: Date;
  style: 'tail' | 'none';
};

export const OtherChatBox = (chatProps: ChatProps) => {
  return (
    <div className="mb-3 mt-3 flex w-full justify-start">
      <div className={`${tailVariants[chatProps.style]} ml-10 inline-block flex`}>
        <div className={`${boxVariants[chatProps.style]} inline-flex min-h-16 min-w-44 max-w-80 bg-gray-200 p-2 text-base`}>
          <div className="w-full">
            <>{chatProps.text}</>
            <div className="flex justify-end text-sm text-gray-400">
              <>{formatTimeByDate(chatProps.time)}</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
