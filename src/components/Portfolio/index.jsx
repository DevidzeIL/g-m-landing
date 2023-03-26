import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import { data } from './data';
import './Portfolio.css';
import prev from '../../assets/icons/prev.svg';
import next from '../../assets/icons/next.svg';

const Portfolio = () => {
  const items = data;
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFilterClick = (filter, index) => {
    setActiveFilter(filter);
    setActiveIndex(index);
  };

  const filteredItems =
    activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter);
  const slicedItems = filteredItems.slice(activeIndex, activeIndex + 3);

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
  ];

  return (
    <div className='page-portfolio' id='portfolio'>
      <div className='filters'>
        {filterButtons.map(({ id, label }, index) => (
          <button
            key={id}
            className={
              id === activeFilter ? 'portfolio-button portfolio-button-active' : 'portfolio-button'
            }
            onClick={() => handleFilterClick(id, 0)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='portfolio-items'>
        {slicedItems.map((item, index) => (
          <PortfolioItem
            key={item.id}
            item={filteredItems.find((filteredItem) => filteredItem.id === item.id)}
          />
        ))}
      </div>
      <div className='portfolio-pagination'>
        <button
          disabled={activeIndex === 0}
          className={
            activeIndex === 0
              ? 'portfolio-button-nav portfolio-button-nav-disabled'
              : 'portfolio-button-nav'
          }
          onClick={() => handleFilterClick(activeFilter, activeIndex - 3)}
        >
          <img className='portfolio-button-icon' src={prev} alt='' />
        </button>
        <button
          disabled={activeIndex + 3 >= filteredItems.length}
          className={
            activeIndex + 3 >= filteredItems.length
              ? 'portfolio-button-nav portfolio-button-nav-disabled'
              : 'portfolio-button-nav'
          }
          onClick={() => handleFilterClick(activeFilter, activeIndex + 3)}
        >
          <img className='portfolio-button-icon' src={next} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
