import React from 'react';

function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <span>{expense.description || expense.name || 'No description'}</span>
      <span>${expense.amount ? Number(expense.amount).toFixed(2) : '0.00'}</span>
      <span>{expense.category || 'N/A'}</span>
      <span>{expense.date || 'N/A'}</span>
      <button
        onClick={() => onDelete(expense.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem; 