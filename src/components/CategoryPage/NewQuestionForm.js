

import React, { useState } from 'react';
import axios from 'axios';

const NewQuestionForm = ({ categoryId, onQuestionAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/questions', {
        title,
        content,
        categoryId,
      });
      setTitle('');
      setContent('');
      if (onQuestionAdded) {
        onQuestionAdded();
      }
    } catch (error) {
      console.error('Error adding new question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ask a New Question</h3>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default NewQuestionForm;
