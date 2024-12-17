

// src/components/HomePage/HomePage.js

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CategoryList from './CategoryList';
import QuestionList from '../CategoryPage/QuestionList';
import LoginPage from '../Auth/LoginPage';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {isAuthenticated ? (
        <div style={{ display: 'flex' }}>
          {/* Vertical Category Tabs */}
          <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '10px' }}>
            <h2>Categories</h2>
            <CategoryList onSelectCategory={setSelectedCategory} />
          </div>

          {/* Main Area for Questions */}
          <div style={{ width: '80%', padding: '10px' }}>
            <h2>Questions</h2>
            {selectedCategory ? (
              <QuestionList categoryId={selectedCategory} />
            ) : (
              <p>Please select a category to view questions.</p>
            )}
          </div>
        </div>
      ) : (
        // If not authenticated, show the login page
        <LoginPage />
      )}
    </div>
  );
};

export default HomePage;



