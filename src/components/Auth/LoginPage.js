

// src/components/Auth/LoginPage.js

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../axiosConfig'; // Adjust the path if needed


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/auth/login', {
        username,
        password,
      });

      login(response.data.token);
      navigate('/'); // Navigate after successful login
    } catch (err) {
      console.error(err);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
