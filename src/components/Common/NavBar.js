

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/categories/new">New Category</Link>
        </li>
        <li>
          <Link to="/questions/new">New Question</Link>
        </li>

        {isAuthenticated ? (
          <li>
            <button
              onClick={logout}
              style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

