

import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Forum App</h1>
      <p>Explore the categories and join the discussion!</p>
      
      <CategoryList />

      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register" style={{ marginLeft: '10px' }}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;