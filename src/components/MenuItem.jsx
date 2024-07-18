// src/components/MenuItem.jsx
import React from 'react';

const MenuItem = ({ dish }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-card" onClick={() => console.log('Mostra dettagli:', dish.name)}>
        <div className="menu-item-info">
          <h3>{dish.name}</h3>
          <p className="menu-item-price">{dish.price} €</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
