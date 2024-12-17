

// src/components/HomePage/CategoryList.js

import React, { useEffect, useState } from 'react';
import axios from '../../axiosConfig';

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
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <button onClick={() => onSelectCategory(category._id)} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;


