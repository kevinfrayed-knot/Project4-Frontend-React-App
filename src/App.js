

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed to HashRouter
import NavBar from './components/Common/NavBar';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import { AuthProvider } from './context/AuthContext'; // Ensure this import is correct

function App() {
  return (
   
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AuthProvider>
   
  );
}

export default App;

