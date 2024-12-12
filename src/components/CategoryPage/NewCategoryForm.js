

import React, { useState } from 'react';
import axios from '../../axiosConfig';

function NewCategoryForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/categories', { name });
      setName(''); // Clear the input field after successful submission
      alert('Category created successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Category</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        required
      />
      <button type="submit">Create Category</button>
      {error && <div>Error: {error}</div>}
    </form>
  );
}

export default NewCategoryForm;
