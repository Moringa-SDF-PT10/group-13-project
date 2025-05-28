import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses found. Add your first expense!</p>;
  }

  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>
      <div className="expense-list-header">
        <span>Description</span>
        <span>Amount</span>
        <span>Category</span>
        <span>Date</span>
        <span>Actions</span>
      </div>
      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          expense={expense} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default ExpenseList;