

// src/components/CategoryPage/QuestionList.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import QuestionCard from '../Common/QuestionCard';
import './QuestionList.css';

const QuestionList = ({ categoryId, onSelectQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null); // Clear any previous errors
      setQuestions([]); // Clear previous data

      try {
        console.log('categoryId:', categoryId);
        const response = await axiosInstance.get(`/questions/category/${categoryId}`);
        console.log('Fetched questions:', response.data); // Debugging log
        setQuestions(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError('Failed to fetch questions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchQuestions();
    }
  }, [categoryId]);

  if (loading) {
    return <p className="loading-message">Loading questions...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="question-list">
        <div className="question-list-header">
          <h3 className="question-list-title">Questions</h3>
        </div>
        <p className="no-questions-message">No questions available for this category.</p>
      </div>
    );
  }

  return (
    <div className="question-list">
      <div className="question-list-header">
        <h3 className="question-list-title">Questions</h3>
      </div>
      {questions.map((question) => (
        <QuestionCard
          key={question._id}
          question={question}
          onClick={() => onSelectQuestion(question._id)}
        />
      ))}
    </div>
  );
};

export default QuestionList;






