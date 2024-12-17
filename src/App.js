

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Common/NavBar';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import NewCategoryForm from './components/CategoryPage/NewCategoryForm';
import NewQuestionForm from './components/CategoryPage/NewQuestionForm'; // Import NewQuestionForm
import QuestionDetailPage from './components/QuestionDetailPage/QuestionsDetailPage'; // Import QuestionDetailPage
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/new" element={<NewCategoryForm />} />
        <Route path="/questions/new" element={<NewQuestionForm />} />
        <Route path="/questions/:id" element={<QuestionDetailPage />} /> {/* Add this line */}
      </Routes>
    </AuthProvider>
  );
}

export default App;






