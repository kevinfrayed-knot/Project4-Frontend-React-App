

// src/utils/authUtils.js

import jwtDecode from 'jwt-decode';

export const getUserIdFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.id; // Assuming the payload contains 'id' for the userId
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
