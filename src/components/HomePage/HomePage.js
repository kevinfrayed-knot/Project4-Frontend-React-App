

// src/components/HomePage/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Forum App</h1>
      <p>Explore the categories and join the discussion!</p>

      <div>
        <Link to="/categories">
          <button>View Categories</button>
        </Link>
        <Link to="/categories/new">
          <button>Create New Category</button>
        </Link>
        <Link to="/questions/new">
          <button>Create New Question</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
