

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category._id}>
              <Link to={`/categories/${category._id}`}>{category.name}</Link>
            </li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>
    </div>
  );
}

export default CategoryList;
