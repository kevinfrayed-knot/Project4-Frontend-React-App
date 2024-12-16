

// src/context/AuthContext.js

// src/context/AuthContext.js

import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode to decode the token

// Create the AuthContext
export const AuthContext = createContext();

// Utility function to get the userId from the token
const getUserIdFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.id; // Assuming the payload contains 'id' for the userId
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  // Login function
  const login = (newToken) => {
    localStorage.setItem('token', newToken); // Store the token in local storage
    setToken(newToken);                      // Update the token state
    setIsAuthenticated(true);                // Set authentication state to true

    const id = getUserIdFromToken(newToken); // Decode the userId from the token
    setUserId(id);                           // Set the userId state

    navigate('/');                           // Navigate to the home page
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setToken(null);                   // Clear the token state
    setIsAuthenticated(false);        // Set authentication state to false
    setUserId(null);                  // Clear the userId state
    navigate('/login');               // Navigate to the login page
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
