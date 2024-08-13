import { formatTimeByDate } from '../../../utils/date';

const tailVariants = {
  tail: "after:relative after:mr-[-1rem] after:border-[1rem] after:border-l-0 after:border-t-[1rem] after:border-transparent after:border-r-transparent after:border-t-blue-500 after:content-['']",
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
        <div className={`${boxVariants[chatProps.style]} inline-flex min-h-16 min-w-44 max-w-80 bg-blue-500 p-2 text-base text-white`}>
          <div className="w-full">
            <>{chatProps.text}</>
            <div className="flex justify-end text-sm text-gray-200">
              <>{formatTimeByDate(chatProps.time)}</>
              <>{chatProps.isChecked ? 'chk' : null}</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
