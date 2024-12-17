

// src/components/CategoryPage/QuestionList.js

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import QuestionCard from '../Common/QuestionCard';

const QuestionList = ({ categoryId, onSelectQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log('categoryId:', categoryId); // Log categoryId to verify its value
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
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h3>Questions</h3>
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionCard key={question._id} question={question} onClick={() => onSelectQuestion(question._id)} />
        ))
      ) : (
        <p>No questions available for this category.</p>
      )}
    </div>
  );
};

export default QuestionList;


