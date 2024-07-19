// src/pages/DishDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const dishes = {
 
};

const DishDetails = () => {
  const { id } = useParams();
  const dish = dishes[id];

  return (
    <div className="dish-details">
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      
      <ul>
        {dish.allergens.map(allergen => (
          <li key={allergen}>{allergen}</li>
        ))}
      </ul>
    </div>
  );
};

export default DishDetails;
