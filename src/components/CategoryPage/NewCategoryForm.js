

// src/components/CategoryPage/NewCategoryForm.js
import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import './NewCategoryForm.css';

const NewCategoryForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/categories', { name });
      setName('');
      navigate('/categories'); // Redirect to the categories page after successful creation
    } catch (err) {
      setError('Failed to create category');
      console.error(err);
    }
  };

  return (
    <div className="new-category-form-container">
      <form className="new-category-form" onSubmit={handleSubmit}>
        <h2>Create New Category</h2>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Category</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default NewCategoryForm;
