

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
      try {
        console.log('categoryId:', categoryId);
        const response = await axiosInstance.get(`/questions/category/${categoryId}`);
        setQuestions(response.data);
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

  return (
    <div className="question-list">
      <h3 className="question-list-title">Questions</h3>
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionCard 
            key={question._id} 
            question={question} 
            onClick={() => onSelectQuestion(question._id)}  // Ensure this line is correct
          />
        ))
      ) : (
        <p className="no-questions-message">No questions available for this category.</p>
      )}
    </div>
  );
};

export default QuestionList;




