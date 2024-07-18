// src/components/MenuCategory.jsx
import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, dishes }) => {
  return (
    <div className="menu-category">
      <h2>{category}</h2>
      <div className="menu-items">
        {dishes.map(dish => (
          <MenuItem key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
