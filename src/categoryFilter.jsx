export default function CategoryFilter({ currentCategory, onChange }) {
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
      <label htmlFor="category-select">Filter by: </label>
      <select
        id="category-select"
        value={currentCategory}
        onChange={(e) => onChange(e.target.value)}
        className="category-select"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
}