import React from 'react';
import '../styles/CategoryFilter.css';
function CategoryFilter({ currentCategory, onChange }) {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Food', label: 'Food' }, // FIXED: Capitalized to match ExpenseForm
    { value: 'Transport', label: 'Transport' },
    { value: 'Utilities', label: 'Utilities' }, // FIXED: Added missing category
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