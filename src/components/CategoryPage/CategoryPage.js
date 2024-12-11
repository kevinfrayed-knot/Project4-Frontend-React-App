

import React from 'react';
import { useParams } from 'react-router-dom';
import NewQuestionForm from './NewQuestionForm';
import QuestionList from './QuestionList';

console.log('CategoryPage loaded');


const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h2>Category Page</h2>
      <NewQuestionForm categoryId={categoryId} onQuestionAdded={() => window.location.reload()} />
      <QuestionList categoryId={categoryId} />
    </div>
  );
};

export default CategoryPage;
