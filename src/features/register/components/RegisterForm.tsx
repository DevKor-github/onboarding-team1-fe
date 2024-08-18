export const RegisterForm = () => {
  return (
    <div>
      <div className="mt-14 mb-7 text-lg font-semibold text-label1">회원가입</div>
      <form className="flex flex-col items-center">
        <input className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="이름" />
        <input className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="비밀번호" />
        <input className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="비밀번호 확인" />
        <input className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="프로필 이미지" />
        <button className="mt-14 h-12 w-72 rounded-lg bg-label2 text-bgwhite">회원가입</button>
      </form>
    </div>
  );
};

//https://github.com/danimkim/pinned/blob/develop/src/components/AuthForm.tsx
