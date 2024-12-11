

import React from 'react';

const AnswerList = ({ answers }) => {
  return (
    <div>
      <h3>Answers</h3>
      {answers.length === 0 ? (
        <p>No answers yet. Be the first to respond!</p>
      ) : (
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnswerList;
