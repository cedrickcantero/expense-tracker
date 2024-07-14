// src/components/Filter.js
import React from 'react';
import '../../styles/main.scss';

const Filter = ({ onFilterChange }) => {
  return (
    <input className="filter-input" type="text" onChange={(e) => onFilterChange(e.target.value)} placeholder="Filter by description" />
  );
};

export default Filter;
