import React from 'react';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import '../assets/Login.css';
import { login } from '../api/auth';
import { LogoM } from '../assets/LogoM';
import { StatusBar } from '../assets/StatusBar';
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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="login-box">
        <div className="avatar">
          <span role="img" aria-label="lock">🔒</span>
        </div>
        <h2>DevKord</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="register-link">
          <Link to="/register">Don't have an account? Register</Link>
        </div>
      </div>

      
    </div>

    

  );
};

export default Login;