

// src/components/QuestionDetailPage/AnswerForm.js
import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig'; // Ensure axiosInstance is correctly imported
import './AnswerForm.css';

const AnswerForm = ({ questionId, onAnswerAdded }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (answer.trim()) {
      try {
        await axiosInstance.post('/answers', {
          questionId,
          content: answer,
        });

        setAnswer('');
        if (onAnswerAdded) onAnswerAdded(); // Refresh the answers list after submission
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
    }
  };

  return (
    <form className="answer-form" onSubmit={handleSubmit}>
      <textarea
        className="answer-textarea"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        rows="4"
        cols="50"
      />
      <br />
      <button className="answer-submit-button" type="submit">
        Submit Answer
      </button>
    </form>
  );
};

export default AnswerForm;
