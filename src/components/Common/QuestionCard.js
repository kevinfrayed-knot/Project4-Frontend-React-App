

import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({ question, onClick }) => {
  return (
    <div
      className="question-card"
      onClick={onClick}
      style={{
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      <h4>{question.content}</h4>
      <p>
        <strong>Asked by:</strong> {question.userId?.username || 'Anonymous'}
      </p>
      <Link to={`/questions/${question._id}`} onClick={(e) => e.stopPropagation()}>
        View Details
      </Link>
    </div>
  );
};

export default QuestionCard;