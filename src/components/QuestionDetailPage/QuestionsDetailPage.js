

import React, { useState } from 'react';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';

const QuestionsDetailPage = () => {
  const [answers, setAnswers] = useState([
    'This is the first answer!',
    'Here is another answer.'
  ]);

  const handleAddAnswer = (newAnswer) => {
    setAnswers([...answers, newAnswer]);
  };

  return (
    <div>
      <h2>Question Details</h2>
      <p>Here are the details of the question...</p>

      <h3>Submit Your Answer</h3>
      <AnswerForm onSubmit={handleAddAnswer} />

      <AnswerList answers={answers} />
    </div>
  );
};

export default QuestionsDetailPage;
