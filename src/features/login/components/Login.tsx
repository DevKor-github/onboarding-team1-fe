import React from 'react';
import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import '../assets/Login.css';
import { login } from '../api/auth';
import LogoM from './LogoM';
type Props = {};

const Login: React.FC<Props> = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password)
      .then(() => {
        navigate('/chatlist');
        //<Link to="/http://localhost:5173/chatlist"/>
        //window.location.reload();
      })
      .catch((error) => {
        console.log('email: ', email, 'password: ', password);
        console.error(error.toString());
      });
  };

  return (
    <div className="align-center relative h-full w-full flex-col bg-white">
      <div className="mt-[253px] flex justify-center pb-[60px]">
        <LogoM />
      </div>

      <div className="font-pre font-weight: 600 ml-16 text-[18px] text-[#2C2C2E]">로그인</div>
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <div className="mt-[30px] flex flex-col items-center gap-[10px]">
          <input
            className="font-pre h-[50px] w-[325px] rounded-[10px] border border-[#D9D9D9] bg-white p-[10px] text-[16px]"
            type="text"
            placeholder="아이디"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <input
            className="font-pre h-[50px] w-[325px] rounded-[10px] border border-[#D9D9D9] bg-white p-[10px] text-[16px]"
            placeholder="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mt-[60px] flex flex-row gap-[10px]">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
          <Link to="/register" className="font-pre flex h-[51px] w-[155px] items-center justify-center rounded-[8px] border border-[#D9D9D9] bg-[#F2F2F7] px-[1px] py-[10px]">
            <div>회원가입</div>
          </Link>
          <button
            type="submit"
            className="font-pre block h-[51px] w-[155px] rounded-[8px] border border-[#D9D9D9] bg-[#3D3D3D] px-[10px] py-[10px] text-center text-[16px] font-bold leading-none text-[#FFFFFF]"
          >
            로그인
          </button>
        </div>

        <Link
          to="http://localhost:8080/users/login"
          className="font-pre my-[10px] flex h-[51px] w-[325px] items-center justify-center rounded-[8px] border border-[#D9D9D9] bg-[#F2F2F7] px-[1px] py-[10px]"
        >
          <div>구글계정으로 로그인</div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
