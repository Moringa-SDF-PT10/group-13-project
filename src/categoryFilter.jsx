import './App.css';

function CategoryFilter({ currentCategory, onFilterChange }) {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'food', label: 'Food' },
    { value: 'transport', label: 'Transport' },
    { value: 'housing', label: 'Housing' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="category-filter">
      <label>Filter by Category:</label>
      <select
        value={currentCategory}
        onChange={(e) => onFilterChange(e.target.value)}
      >
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