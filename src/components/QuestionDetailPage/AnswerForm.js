

import React, { useState } from 'react';

const AnswerForm = ({ onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim()) {
      onSubmit(answer);
      setAnswer('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        rows="4"
        cols="50"
      />
      <br />
      <button type="submit">Submit Answer</button>
    </form>
  );
};

export default AnswerForm;
