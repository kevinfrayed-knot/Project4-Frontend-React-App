

// src/components/CategoryPage/CategoryPage.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import CategoryCard from '../Common/CategoryCard';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to fetch categories');
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {error && <p>{error}</p>}
      <div>
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard key={category._id} name={category.name} />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
