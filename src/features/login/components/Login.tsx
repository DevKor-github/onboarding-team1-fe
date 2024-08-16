import React from 'react';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import '../assets/Login.css';
import { login } from '../api/auth';
import LogoM from './LogoM';
type Props = {}

const Login: React.FC<Props>=()=>{
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password).then(
      ()=>{
        <Link to="/chatlist"/>
        window.location.reload();
      },
      (error)=>{
        console.log("email: ", email, "password: ", password);
        console.error(error.toString());
      }
    );
  };

  return(
    <div className='bg-white flex justify-center'>
      <div className='bg-yellow-100 w-[393px] h-[852px] relative'>
        
        <div className='ml-[71px] mt-[253px] pb-[60px]'>
          <LogoM></LogoM>
        </div>
        
        <div className='ml-[24px] text-[18px] text-[#2C2C2E] font-Pretendard font-weight: 600'>
          로그인
        </div> 
        <form onSubmit={handleLogin}>
          <div className='flex flex-col gap-[10px] ml-[34px] mr-[34px] mt-[30px]'>
            <input
              className='w-[325px] h-[50px] p-[10px] bg-white border border-[#D9D9D9] rounded-[10px] text-[16px] font-Pretendard'
              type="text"
              placeholder='아이디'
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <input
              className='w-[325px] h-[50px] p-[10px] bg-white border border-[#D9D9D9] rounded-[10px] text-[16px] font-Pretendard'
              placeholder='비밀번호'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-row gap-[10px] ml-[34px] mt-[60px] '>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"/>
            <Link to="/register" className='w-[155px] h-[51px] px-[1px] py-[16.5px] bg-[#F2F2F7] border border-[#D9D9D9] rounded-[8px] 
            text-[16px] text-[#3D3D3D] text-center font-Pretendard font-bold leading-none block'>
              회원가입
            </Link>
            <button type='submit' className='w-[155px] h-[51px] px-[10px] py-[10px] bg-[#3D3D3D] border border-[#D9D9D9] rounded-[8px]
            text-[16px] text-[#FFFFFF] text-center font-Pretendard font-bold leading-none block'>
              로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;