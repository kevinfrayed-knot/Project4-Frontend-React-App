

// src/components/Common/NavBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {isAuthenticated ? (
        <ul className="nav-links">
          <li className="nav-item">
            <button onClick={logout} className="nav-button">
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
