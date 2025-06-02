import React from 'react';

function CategoryFilter({ currentCategory, onChange }) {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Food', label: 'Food' }, 
    { value: 'Transport', label: 'Transport' },
    { value: 'Utilities', label: 'Utilities' }, 
    { value: 'Entertainment', label: 'Entertainment' }
  ];

  return (
    <div className="category-filter">
      <label>Filter by Category:</label>
      <select value={currentCategory} onChange={(e) => onChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
