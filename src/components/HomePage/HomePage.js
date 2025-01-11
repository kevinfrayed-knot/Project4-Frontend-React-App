


// src/components/HomePage/HomePage.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CategoryList from './CategoryList';
import QuestionList from '../CategoryPage/QuestionList';
import QuestionsDetailPage from '../QuestionDetailPage/QuestionsDetailPage';
import NewQuestionForm from '../CategoryPage/NewQuestionForm';
import LoginPage from '../Auth/LoginPage';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [showNewQuestionForm, setShowNewQuestionForm] = useState(false);

  const onSelectQuestion = (questionId) => {
    setSelectedQuestionId(questionId);
    setShowNewQuestionForm(false); // Hide NewQuestionForm when a question is selected
  };

  const onAddNewQuestion = () => {
    setShowNewQuestionForm(true);
    setSelectedQuestionId(null); // Ensure question details are hidden when creating a new question
  };

  const onSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowNewQuestionForm(false); // Hide NewQuestionForm when a category is selected
    setSelectedQuestionId(null); // Reset selected question when a category is selected
  };

  return (
    <div className="home-page-container">
  {isAuthenticated ? (
    <div className="home-page-layout">  {/* Ensure this div is styled */}
      {/* Sidebar for Categories */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Categories</h2>
        <CategoryList onSelectCategory={onSelectCategory} />
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {selectedCategory ? (
          <>
            {/* New Question Button */}
            <div className="new-question-container">
              {!showNewQuestionForm && (
                <button
                  className="new-question-button"
                  onClick={onAddNewQuestion}
                >
                  New Question
                </button>
              )}
            </div>

            {/* Show New Question Form or Questions List */}
            {showNewQuestionForm ? (
              <NewQuestionForm categoryId={selectedCategory} />
            ) : (
              <QuestionList
                categoryId={selectedCategory}
                onSelectQuestion={onSelectQuestion}
              />
            )}

            {/* Show Question Details */}
            {selectedQuestionId && (
              <QuestionsDetailPage questionId={selectedQuestionId} />
            )}
          </>
        ) : (
          <p className="no-category-message">
            Please select a category to view questions.
          </p>
        )}
      </main>
    </div>
  ) : (
    <LoginPage />
  )}
</div>
  );
};

export default HomePage;


