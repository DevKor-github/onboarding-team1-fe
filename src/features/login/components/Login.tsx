import React from 'react';
import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import '../assets/Login.css';
import { login } from '../api/auth';
import LogoM from './LogoM';
type Props = {}

const Login: React.FC<Props>=()=>{
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password).then(
      ()=>{
        navigate('/chatlist');
        //<Link to="/http://localhost:5173/chatlist"/>
        //window.location.reload();
      })
      .catch((error)=>{
        console.log("email: ", email, "password: ", password);
        console.error(error.toString());
      }
    );
  };

  return(
    <div className='bg-yellow-100 flex h-screen justify-center'>
      <div className='bg-white w-[393px] h-[852px] relative'>
        
        <div className='ml-[71px] mt-[253px] pb-[60px]'>
          <LogoM size="vector-2.svg" fontSize={39}></LogoM>
        </div>
        
        <div className='ml-[24px] text-[18px] text-[#2C2C2E] font-pre font-weight: 600'>
          로그인
        </div> 
        <form onSubmit={handleLogin}>
          <div className='flex flex-col gap-[10px] mx-[34px] mt-[30px]'>
            <input
              className='w-[325px] h-[50px] p-[10px] bg-white border border-[#D9D9D9] rounded-[10px] text-[16px] font-pre'
              type="text"
              placeholder='아이디'
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <input
              className='w-[325px] h-[50px] p-[10px] bg-white border border-[#D9D9D9] rounded-[10px] text-[16px] font-pre'
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
            <Link to="/register" className='flex justify-center items-center font-pre w-[155px] h-[51px] px-[1px] py-[10px] bg-[#F2F2F7] border border-[#D9D9D9] rounded-[8px]'>
              <div>회원가입</div>
            </Link>
            <button type='submit' className='w-[155px] h-[51px] px-[10px] py-[10px] bg-[#3D3D3D] border border-[#D9D9D9] rounded-[8px]
            text-[16px] text-[#FFFFFF] text-center font-pre font-bold leading-none block'>
              로그인</button>
          </div>

           <Link to="http://localhost:8080/users/login" 
           className='flex justify-center items-center w-[325px] h-[51px] mx-[34px] my-[10px] px-[1px] py-[10px] bg-[#F2F2F7] font-pre border border-[#D9D9D9] rounded-[8px]'>
             <div>구글계정으로 로그인</div>
           </Link>
          
        </form>
      </div>
    </div>
  );
};

export default Login;