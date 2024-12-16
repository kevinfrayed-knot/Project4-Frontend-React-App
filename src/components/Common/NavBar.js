

// src/components/Common/NavBar.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Navigate after logout
  };

  return (
    <nav>
      <a href="/">Home</a>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </>
      )}
    </nav>
  );
};

export default NavBar;
