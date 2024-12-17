

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">View Categories</Link>
        </li>
        <li>
          <Link to="/categories/new">Create New Category</Link>
        </li>
        <li>
          <Link to="/questions/new">Create New Question</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <li>
            <button
              onClick={logout}
              style={{
                background: 'none',
                border: 'none',
                color: 'blue',
                cursor: 'pointer',
                fontSize: 'inherit',
                textDecoration: 'underline',
                padding: 0,
                marginLeft: '10px',
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
