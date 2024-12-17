

import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../utils/axiosConfig';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';
import { useParams } from 'react-router-dom';

const QuestionDetailPage = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stable fetch function using useCallback
  const fetchQuestionAndAnswers = useCallback(async () => {
    try {
      const questionResponse = await axiosInstance.get(`/questions/${questionId}`);
      setQuestion(questionResponse.data);

      const answersResponse = await axiosInstance.get(`/answers/${questionId}`);
      setAnswers(answersResponse.data);
    } catch (err) {
      console.error('Error fetching question or answers:', err);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [questionId]);

  useEffect(() => {
    fetchQuestionAndAnswers();
  }, [fetchQuestionAndAnswers]);

  const handleAddAnswer = () => {
    fetchQuestionAndAnswers();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {question && (
        <>
          <h2>{question.content}</h2>
          <p>Asked by: {question.userId.username}</p>
        </>
      )}

      <h3>Submit Your Answer</h3>
      <AnswerForm questionId={questionId} onAnswerAdded={handleAddAnswer} />

      <h3>Answers</h3>
      <AnswerList answers={answers} />
    </div>
  );
};

export default QuestionDetailPage;