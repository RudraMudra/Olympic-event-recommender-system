import React, { useState } from 'react';

const FilterOptions = ({ filters, selectedFilter, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    onFilterChange(newFilter);
  };

  const filterOptionsStyles = {
    background: '#f4f4f4',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const filterHeadingStyles = {
    fontSize: '20px',
    marginBottom: '10px',
  };

  const filterLabelStyles = {
    display: 'block',
    marginBottom: '10px',
  };

  const filterSelectStyles = {
    padding: '5px 10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <div style={filterOptionsStyles}>
      <h2 style={filterHeadingStyles}>Filter By:</h2>
      <label style={filterLabelStyles}>
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          style={filterSelectStyles}
        >
          {filters.map((filter) => (
            <option key={filter.label} value={filter.label}>
              {filter.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterOptions;
