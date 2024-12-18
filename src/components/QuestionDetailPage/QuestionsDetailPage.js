

// src/components/QuestionDetailPage/QuestionsDetailPage.js
import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../../axiosConfig'; // Correct relative path based on file structure
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';
import { useParams } from 'react-router-dom';
import './QuestionsDetailPage.css';

const QuestionsDetailPage = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Log the questionId to verify its value
  console.log('Question ID:', questionId);

  // Stable fetch function using useCallback
  const fetchQuestionAndAnswers = useCallback(async () => {
    try {
      console.log(`Fetching question with ID: ${questionId}`);

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

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="question-detail-container">
      {question && (
        <div className="question-content">
          <h2 className="question-title">{question.content}</h2>
          <p className="question-author">
            <strong>Asked by:</strong> {question.userId?.username || 'Anonymous'}
          </p>
        </div>
      )}

      <div className="submit-answer-section">
        <h3 className="submit-answer-title">Submit Your Answer</h3>
        <AnswerForm questionId={questionId} onAnswerAdded={handleAddAnswer} />
      </div>

      <div className="answers-section">
        <h3 className="answers-title">Answers</h3>
        <AnswerList answers={answers} />
      </div>
    </div>
  );
};

export default QuestionsDetailPage;

