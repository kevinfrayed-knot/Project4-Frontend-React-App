

// src/context/AuthContext.js

import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  // Login function
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
