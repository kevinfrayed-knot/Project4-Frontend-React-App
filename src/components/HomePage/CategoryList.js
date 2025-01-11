

// src/components/HomePage/CategoryList.js

import React, { useEffect, useState } from 'react';
import axios from '../../axiosConfig';
import './CategoryList.css';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories');
        setCategories(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="category-list-container">
      {/* Removed the redundant New Category button */}
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category._id} className="category-item">
            <button
              onClick={() => onSelectCategory(category._id)}
              className="category-button"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
