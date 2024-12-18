

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CategoryList from '../HomePage/CategoryList';
import QuestionList from '../CategoryPage/QuestionList';
import QuestionsDetailPage from '../QuestionDetailPage/QuestionsDetailPage';
import LoginPage from '../Auth/LoginPage';
import NewCategoryForm from '../CategoryPage/NewCategoryForm';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);

  const onSelectQuestion = (questionId) => {
    setSelectedQuestionId(questionId);
  };

  const onAddCategory = () => {
    setShowNewCategoryForm(true);
  };

  return (
    <div className="home-page-container">
      {isAuthenticated ? (
        <>
          <div className="sidebar">
            <CategoryList onSelectCategory={setSelectedCategory} onAddCategory={onAddCategory} />
          </div>

          <div className="main-content">
            {showNewCategoryForm ? (
              <NewCategoryForm />
            ) : selectedCategory ? (
              <>
                <QuestionList categoryId={selectedCategory} onSelectQuestion={onSelectQuestion} />
                {selectedQuestionId && <QuestionsDetailPage questionId={selectedQuestionId} />}
              </>
            ) : (
              <p>Please select a category to view questions.</p>
            )}
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default HomePage;
