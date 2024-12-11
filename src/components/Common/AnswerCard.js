

import React from 'react';

const AnswerCard = ({ answer, author, date }) => {
  return (
    <div className="answer-card">
      <p>{answer}</p>
      <p><strong>By:</strong> {author}</p>
      <p><em>{new Date(date).toLocaleDateString()}</em></p>
    </div>
  );
};

export default AnswerCard;
