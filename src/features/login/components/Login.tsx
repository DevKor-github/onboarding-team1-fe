import React from 'react';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import '../assets/Login.css';

import { login } from '../api/auth';

type Props = {}

const Login: React.FC<Props>=()=>{
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email: string = e.currentTarget.email.value;
    const password: string = e.currentTarget.password.value;
    
    login(email, password).then(
      ()=>{
        window.location.reload();
      },
      (error)=>{
        console.error(error.toString());
      }
    );
  };

  return(
    <div className="container">
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