

// src/components/Common/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">View Categories</Link></li>
        <li><Link to="/categories/new">Create New Category</Link></li>
        <li><Link to="/questions/new">Create New Question</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

