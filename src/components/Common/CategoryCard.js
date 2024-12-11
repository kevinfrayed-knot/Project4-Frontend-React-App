

import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ categoryName }) => {
  return (
    <div className="category-card">
      <h3>{categoryName}</h3>
      <Link to={`/categories/${categoryName.toLowerCase()}`}>View Questions</Link>
    </div>
  );
};

export default CategoryCard;
