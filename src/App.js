

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import NewQuestionForm from './components/CategoryPage/NewQuestionForm';
import QuestionDetailPage from './components/QuestionDetailPage/QuestionsDetailPage';
import NotFound from './NotFound'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/new" element={<NewQuestionForm />} />
        <Route path="/questions/:id" element={<QuestionDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


