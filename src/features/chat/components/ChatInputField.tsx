export const ChatInputField = () => {
  return (
    <div className="flex h-24 w-full justify-center border pt-3">
      <div className="mr-3 flex h-10 items-center">emt</div>
      <div className="bg-bggray flex h-10 w-4/5 items-center rounded-full">
        <input placeholder="Start typing..." className="ml-5 mr-2 w-4/5 bg-transparent text-base focus:outline-none"></input>
        <>sndbtn</>
      </div>
    </div>
  );
};
