import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Login.css';

const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 실제 로그인 로직을 구현할 수 있습니다.
    if (email === 'hello' && password === 'world') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
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
            <label htmlFor="email">ID</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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