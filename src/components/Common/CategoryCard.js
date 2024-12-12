

// src/components/Common/CategoryCard.js
import React from 'react';

const CategoryCard = ({ name }) => {
  return (
    <div className="category-card">
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;
