

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories');
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
          <li
            key={category._id}
            onClick={() => onSelectCategory(category._id)}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
