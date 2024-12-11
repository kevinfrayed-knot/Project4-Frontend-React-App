

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Return to Home</Link>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '3rem',
    color: '#ff4d4f',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1rem',
    color: '#1890ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default NotFound;
