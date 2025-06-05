import { useState, useEffect } from 'react';
import BudgetSetter from '../components/BudgetSetter';
import CategoryFilter from '../components/CategoryFilter';
import ExpenseForm from '../components/ExpenseForm';
import './App.css';

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< Updated upstream:src/ExpenseList.jsx
        const [expensesRes, budgetRes] = await Promise.all([
          fetch('https://group-13-project.onrender.com/expenses'),
          fetch('https://group-13-project.onrender.com/expenses')
        ]);
        
        const expensesData = await expensesRes.json();
        const budgetData = await budgetRes.json();
        
        setExpenses(expensesData);
        setBudget(budgetData[0]?.amount || 0);
=======
        // Fetch transactions (expenses) and budget separately
        const [transactionsRes, budgetsRes] = await Promise.all([
          fetch('https://group-13-project-1.onrender.com/transactions'),
          fetch('https://group-13-project-1.onrender.com/budgets')
        ]);

        const transactionsData = await transactionsRes.json();
        const budgetsData = await budgetsRes.json();

        setExpenses(transactionsData);
        setBudget(budgetsData[0]?.amount || 0);
>>>>>>> Stashed changes:src/components/ExpenseList.jsx
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Add new expense
  const addExpense = async (newExpense) => {
    try {
<<<<<<< Updated upstream:src/ExpenseList.jsx
      const response = await fetch('https://group-13-project.onrender.com/expenses', {
=======
      const response = await fetch('https://group-13-project-1.onrender.com/transactions', {
>>>>>>> Stashed changes:src/components/ExpenseList.jsx
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newExpense, id: Date.now() })
      });
      const data = await response.json();
      setExpenses([...expenses, data]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  // Delete expense
  const deleteExpense = async (id) => {
    try {
<<<<<<< Updated upstream:src/ExpenseList.jsx
      await fetch(`https://group-13-project.onrender.com/expenses/${id}`, {
=======
      await fetch(`https://group-13-project-1.onrender.com/transactions/${id}`, {
>>>>>>> Stashed changes:src/components/ExpenseList.jsx
        method: 'DELETE'
      });
      setExpenses(expenses.filter(e => e.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  // Update budget
  const updateBudget = async (amount) => {
    try {
<<<<<<< Updated upstream:src/ExpenseList.jsx
      const response = await fetch('https://group-13-project.onrender.com/budgets/1', {
=======
      const response = await fetch('https://group-13-project-1.onrender.com/budgets/1', {
>>>>>>> Stashed changes:src/components/ExpenseList.jsx
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 1, amount })
      });
      const data = await response.json();
      setBudget(data.amount);
    } catch (error) {
      console.error("Error updating budget:", error);
    }
  };

  // Filter expenses by category
  const filteredExpenses = category === 'all' 
    ? expenses 
    : expenses.filter(e => e.category === category);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="expenses-container">
      <h1>Expense Tracker</h1>
      
      <BudgetSetter budget={budget} onSetBudget={updateBudget} />
      
      <CategoryFilter 
        currentCategory={category} 
        onChange={setCategory} 
      />
      
      <ExpenseForm onAddExpense={addExpense} />
      
      <div className="expense-list">
        <h2>Your Expenses</h2>
        
        {filteredExpenses.length === 0 ? (
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
            
            {filteredExpenses.map(expense => (
              <div key={expense.id} className="expense-item">
<<<<<<< Updated upstream:src/ExpenseList.jsx
                <span>{expense.description}</span>
                <span>${expense.amount.toFixed(2)}</span>
=======
                <span>{expense.description || expense.name}</span>
                <span>${Number(expense.amount).toFixed(2)}</span>
>>>>>>> Stashed changes:src/components/ExpenseList.jsx
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