import React from 'react';
import './Portfolio.css';

const PortfolioItem = ({ item }) => {
  return (
    <div className='portfolio-item'>
      <img className='portfolio-item-img' src={item.image} alt={item.title} />
    </div>
  );
};

export default PortfolioItem;
