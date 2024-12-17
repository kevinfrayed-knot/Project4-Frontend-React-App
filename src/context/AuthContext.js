

import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

const getUserIdFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.id;
  } catch (error) {
    console.error('Error decoding token:', error);
    localStorage.removeItem('token');
    return null;
  }
};

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(isTokenValid(initialToken) ? initialToken : null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!isTokenValid(initialToken));
  const [userId, setUserId] = useState(isTokenValid(initialToken) ? getUserIdFromToken(initialToken) : null);
  const navigate = useNavigate();

  const login = (newToken) => {
    sessionStorage.setItem('token', newToken); // Store token in sessionStorage
    setToken(newToken);
    setIsAuthenticated(true);
    setUserId(getUserIdFromToken(newToken));
    navigate('/');
  };
  

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
    setUserId(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

