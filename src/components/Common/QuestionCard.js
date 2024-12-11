

import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({ question, author, id }) => {
  return (
    <div className="question-card">
      <h4>{question}</h4>
      <p><strong>Asked by:</strong> {author}</p>
      <Link to={`/questions/${id}`}>View Details</Link>
    </div>
  );
};

export default QuestionCard;
