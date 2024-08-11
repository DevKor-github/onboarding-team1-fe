const tailVariants = {
  tail: "after:absolute after:inline after:border-[1rem] after:border-l-0 after:border-t-[1rem] after:border-transparent after:border-r-transparent after:border-t-blue-500 after:content-['']",
  none: '',
};

const boxVariants = {
  tail: 'rounded-l-lg rounded-br-lg',
  none: 'rounded-lg',
};

export const MyChatBox = ({ style }: { style: 'tail' | 'none' }) => {
  return (
    <div className="mb-3 mt-3 flex w-full justify-end">
      <div className={`${tailVariants[style]} mr-10 inline-block`}>
        <div className={`${boxVariants[style]} inline-flex min-h-16 min-w-56 max-w-80 bg-blue-500 p-2 text-base text-white`}>
          <div className="w-full">
            <>시험용 멘트입니다</>
            <div className="flex justify-end text-sm">
              <>오전 11:45</>
              <>chk</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
