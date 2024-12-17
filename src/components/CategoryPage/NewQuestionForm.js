

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../axiosConfig'; // Import axiosInstance


const NewQuestionForm = ({ onQuestionAdded, userId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);  // State to store categories
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories when the component loads
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Token in sessionStorage before POST request:', sessionStorage.getItem('token'));
  
    try {
      const response = await axiosInstance.post('/questions', {
        title,
        content,
        categoryId: selectedCategory,
        userId,
      });
  
      console.log('Question added successfully:', response.data);
      setTitle('');
      setContent('');
      setSelectedCategory('');
  
      if (onQuestionAdded) {
        onQuestionAdded();
      }
    } catch (error) {
      console.error('Error adding new question:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ask a New Question</h3>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select a Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default NewQuestionForm;

