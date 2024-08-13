import { formatTimeByDate } from '@utils/date';

const tailVariants = {
  tail: "after:relative after:mr-[-0.7rem] after:border-[0.7rem] after:border-l-0 after:border-t-[0.7rem] after:border-transparent after:border-r-transparent after:border-t-bgblue after:content-['']",
  none: '',
};

const boxVariants = {
  tail: 'rounded-l-lg rounded-br-lg',
  none: 'rounded-lg',
};

type ChatProps = {
  text: string;
  isChecked?: boolean;
  time: Date;
  style: 'tail' | 'none';
};

export const MyChatBox = (chatProps: ChatProps) => {
  return (
    <div className="mb-3 mt-3 flex w-full justify-end">
      <div className={`${tailVariants[chatProps.style]} mr-10 flex`}>
        <div className={`${boxVariants[chatProps.style]} inline-flex min-h-10 min-w-32 max-w-72 bg-bgblue p-1 text-base text-bgwhite`}>
          <div className="w-full">
            <div className="mt-1 text-sm font-normal">{chatProps.text}</div>
            <div className="flex justify-end text-xs font-light">{formatTimeByDate(chatProps.time)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
