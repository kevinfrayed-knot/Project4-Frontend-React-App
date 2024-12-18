

// src/components/Common/QuestionCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';

const QuestionCard = ({ question, onClick }) => {
  return (
    <div className="question-card" onClick={onClick}>
      <h4 className="question-content">{question.content}</h4>
      <p className="question-author">
        <strong>Asked by:</strong> {question.userId?.username || 'Anonymous'}
      </p>
      <Link 
        to={`/questions/${question._id}`} 
        className="view-details-link" 
        onClick={(e) => e.stopPropagation()}
      >
        View Details
      </Link>
    </div>
  );
};

export default QuestionCard;
