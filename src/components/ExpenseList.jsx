import React, { useState, useEffect } from 'react';
import BudgetSetter from './BudgetSetter';
import CategoryFilter from './CategoryFilter';
import ExpenseForm from './ExpenseForm';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');
        const [expensesRes, budgetRes] = await Promise.all([
          fetch('https://group-13-project-1.onrender.com/transactions'),
          fetch('https://group-13-project-1.onrender.com/budgets')
        ]);
        const expensesData = await expensesRes.json();
        const budgetData = await budgetRes.json();
        setExpenses(expensesData);
        setBudget(budgetData[0]?.amount || 0);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addExpense = async (newExpense) => {
    try {
      setError('');
      const response = await fetch('https://group-13-project-1.onrender.com/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newExpense, id: Date.now() })
      });
      const data = await response.json();
      setExpenses([...expenses, data]);
    } catch (error) {
      setError("Error adding expense. Please try again.");
    }
  };

  const deleteExpense = async (id) => {
    try {
      setError('');
      await fetch(`https://group-13-project-1.onrender.com/transactions/${id}`, {
        method: 'DELETE'
      });
      setExpenses(expenses.filter(e => e.id !== id));
    } catch (error) {
      setError("Error deleting expense. Please try again.");
    }
  };

  const updateBudget = async (amount) => {
    try {
      setError('');
      const response = await fetch('https://group-13-project-1.onrender.com/budgets/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 1, amount })
      });
      const data = await response.json();
      setBudget(data.amount);
    } catch (error) {
      setError("Error updating budget. Please try again.");
    }
  };

  const filteredExpenses = category === 'all'
    ? expenses
    : expenses.filter(e => e.category === category);

  // Sort expenses by date (most recent first)
  const sortedExpenses = [...filteredExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalSpent = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const budgetLeft = budget - totalSpent;

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="expenses-container">
      <h1>Expense Tracker</h1>
      <BudgetSetter budget={budget} onSetBudget={updateBudget} />
      <div style={{ margin: '1rem 0', fontWeight: 600 }}>
        Budget Left: <span style={{ color: budgetLeft < 0 ? 'red' : 'green' }}>${budgetLeft.toFixed(2)}</span>
      </div>
      <CategoryFilter
        currentCategory={category}
        onChange={setCategory}
      />
      <ExpenseForm onAddExpense={addExpense} />
      {error && <div style={{ color: 'red', margin: '1rem 0' }}>{error}</div>}
      <div className="expense-list">
        <h2>Your Expenses</h2>
        {sortedExpenses.length === 0 ? (
          <p className="no-expenses">No expenses found. Add your first expense!</p>
        ) : (
          <>
            <div className="expense-list-header">
              <span>Description</span>
              <span>Amount</span>
              <span>Category</span>
              <span>Date</span>
              <span>Actions</span>
            </div>
            {sortedExpenses.map(expense => (
              <div key={expense.id} className="expense-item">
                <span>{expense.description || expense.name}</span>
                <span>${Number(expense.amount).toFixed(2)}</span>
                <span>{expense.category}</span>
                <span>{expense.date}</span>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;