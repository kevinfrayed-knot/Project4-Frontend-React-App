

// src/components/QuestionDetailPage/AnswerList.js
import React from 'react';
import './AnswerList.css';

const AnswerList = ({ answers }) => {
  return (
    <div className="answer-list-container">
      <h3 className="answer-list-title">Answers</h3>
      {answers.length === 0 ? (
        <p className="no-answers-message">No answers yet. Be the first to respond!</p>
      ) : (
        <ul className="answer-list">
          {answers.map((answer) => (
            <li key={answer._id} className="answer-item">
              <p className="answer-content">{answer.content}</p>
              <small className="answer-author">
                By: {answer.userId?.username || 'Anonymous'}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnswerList;


