

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from '../Common/QuestionCard';

const QuestionList = ({ categoryId }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/questions/category/${categoryId}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [categoryId]);

  return (
    <div>
      <h3>Questions</h3>
      {loading ? (
        <p>Loading questions...</p>
      ) : questions.length > 0 ? (
        questions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))
      ) : (
        <p>No questions available for this category.</p>
      )}
    </div>
  );
};

export default QuestionList;
