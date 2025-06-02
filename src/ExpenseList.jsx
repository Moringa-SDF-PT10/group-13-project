import BudgetSetter from './BudgetSetter';
import CategoryFilter from './CategoryFilter';
import ExpenseForm from './ExpenseForm';
import { useState, useEffect } from 'react';
import ExpenseItem from '../ExpenseItem';
import './App.css';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expensesRes, budgetRes] = await Promise.all([
          fetch('https://group-13-project.onrender.com/transactions'),
          fetch('https://group-13-project.onrender.com/budgets')
        ]);
        
        const expensesData = await expensesRes.json();
        const budgetData = await budgetRes.json();
        
        setExpenses(Array.isArray(expensesData) ? expensesData : []);
        setBudget(
          Array.isArray(budgetData) && budgetData.length > 0 && budgetData[0].amount
            ? budgetData[0].amount
            : 0
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addExpense = async (newExpense) => {
    try {
      const response = await fetch('https://group-13-project.onrender.com/transactions', {
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

  const deleteExpense = async (id) => {
    try {
      await fetch(`https://group-13-project.onrender.com/transactions/${id}`, {
        method: 'DELETE'
      });
      setExpenses(expenses.filter(e => e.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const updateBudget = async (amount) => {
    try {
      const response = await fetch('https://group-13-project.onrender.com/budgets/1', {
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

  const filteredExpenses = category === 'all' 
    ? expenses 
    : expenses.filter(e => e.category === category);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="expenses-container">
      <h1>Expense Tracker</h1>
      
      <BudgetSetter budget={budget} onSetBudget={updateBudget} />
      
      <CategoryFilter currentCategory={category} onFilterChange={setCategory} />
      
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
           <ExpenseItem key={expense.id} expense={expense} onDelete={deleteExpense} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}