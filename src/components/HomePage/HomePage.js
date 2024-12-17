

// src/components/HomePage/HomePage.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CategoryList from '../HomePage/CategoryList';
import QuestionList from '../CategoryPage/QuestionList';
import QuestionsDetailPage from '../QuestionDetailPage/QuestionsDetailPage'; // Correct import
import LoginPage from '../Auth/LoginPage';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const onSelectQuestion = (questionId) => {
    console.log('Navigating to question with ID:', questionId); // Debugging statement
    setSelectedQuestionId(questionId);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div style={{ display: 'flex' }}>
          {/* Vertical Category Tabs */}
          <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '10px' }}>
            <h2>Categories</h2>
            <CategoryList onSelectCategory={(categoryId) => setSelectedCategory(categoryId)} />
          </div>

          {/* Main Area for Questions and Question Details */}
          <div style={{ width: '80%', padding: '10px' }}>
            <h2>Questions</h2>
            {selectedCategory ? (
              <>
                <QuestionList categoryId={selectedCategory} onSelectQuestion={onSelectQuestion} />
                {selectedQuestionId && (
                  <div style={{ marginTop: '20px' }}>
                    <h2>Question Details</h2>
                    <QuestionsDetailPage questionId={selectedQuestionId} />
                  </div>
                )}
              </>
            ) : (
              <p>Please select a category to view questions.</p>
            )}
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default HomePage;
