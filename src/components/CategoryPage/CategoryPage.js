

// src/components/CategoryPage/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
  }, []); // Ensure the dependency array is empty to avoid infinite re-renders
  

  return (
    <div>
      <h1>Categories</h1>
      
      {/* Navigation Link to NewCategoryForm */}
      <Link to="/categories/new">
        <button>Create New Category</button>
      </Link>

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
