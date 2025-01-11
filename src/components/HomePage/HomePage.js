


import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CategoryList from './CategoryList';
import QuestionList from '../CategoryPage/QuestionList';
import QuestionsDetailPage from '../QuestionDetailPage/QuestionsDetailPage';
import NewQuestionForm from '../CategoryPage/NewQuestionForm';
import NewCategoryForm from '../CategoryPage/NewCategoryForm';  // Import the NewCategoryForm
import LoginPage from '../Auth/LoginPage';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [showNewQuestionForm, setShowNewQuestionForm] = useState(false);
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);  // ✅ New State

  const onSelectQuestion = (questionId) => {
    setSelectedQuestionId(questionId);
    setShowNewQuestionForm(false);
  };

  const onAddNewQuestion = () => {
    setShowNewQuestionForm(true);
    setSelectedQuestionId(null);
  };

  const onSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowNewQuestionForm(false);
    setSelectedQuestionId(null);
  };

  // ✅ New Function to Show the New Category Form
  const onAddNewCategory = () => {
    setShowNewCategoryForm(true);
    setShowNewQuestionForm(false);
    setSelectedCategory(null);
    setSelectedQuestionId(null);
  };

  return (
    <div className="home-page-container">
      {isAuthenticated ? (
        <div className="home-page-layout">
          {/* Sidebar for Categories */}
          <aside className="sidebar">
            <h2 className="sidebar-title">Categories</h2>
            <button
              className="new-category-button"
              onClick={onAddNewCategory}  // ✅ Trigger New Category Form
            >
              + New Category
            </button>
            <CategoryList onSelectCategory={onSelectCategory} />
          </aside>

          {/* Main Content Area */}
          <main className="main-content">
            {showNewCategoryForm ? (
              <NewCategoryForm />
            ) : selectedCategory ? (
              <>
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

                {showNewQuestionForm ? (
                  <NewQuestionForm categoryId={selectedCategory} />
                ) : (
                  <QuestionList
                    categoryId={selectedCategory}
                    onSelectQuestion={onSelectQuestion}
                  />
                )}

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



