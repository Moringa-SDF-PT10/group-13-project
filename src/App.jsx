import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './header';
import ExpenseForm from './expenseForm';
import BudgetSetter from './budgetSetter';

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://group-13-project.onrender.com";

  const handleAddExpense = async (expense) => {
    try {
      const response = await fetch(`${API_BASE_URL}/expenses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense)
      });

      if (response.ok) {
        const newExpense = await response.json();
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        console.log('Expense added:', newExpense);
      } else {
        console.error("Failed to add expense:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/expenses`);
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
      } else {
        console.error(`Failed to fetch expenses: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <BudgetSetter budget={budget} setBudget={setBudget} />

      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React Expense Tracker</h1>

      <div className="expenses">
        <h2>Expenses</h2>
        {loading ? (
          <p>Loading expenses...</p>
        ) : expenses.length > 0 ? (
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id}>
                {expense.name} - ${Number(expense.amount).toFixed(2)} ({expense.category})
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses found.</p>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
