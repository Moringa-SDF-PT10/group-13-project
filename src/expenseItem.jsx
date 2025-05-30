function ExpenseItem({ expense, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '6px' }}>
      <p><strong>{expense.name}</strong> - KES {expense.amount}</p>
      <small>Category: {expense.category}</small>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
