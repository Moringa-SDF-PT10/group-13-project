import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header';
import ExpenseForm from './expenseForm';

function App() {
  const [expense, setExpense] = useState([
    {
      id: 1,
      amount: 12.50,
      description: "Coffee and pastry",
      category: "Food",
      date: "2025-05-24"
    },
    {
      id: 2,
      amount: 45.00,
      description: "Gas for car",
      category: "Transportation",
      date: "2025-05-23"
    },
    {
      id: 3,
      amount: 25.99,
      description: "Movie tickets",
      category: "Entertainment",
      date: "2025-05-22"
    }
  ]);

  const [budget, setBudget] = useState(1000);
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Function to add new expense

  // Function to delete expense

  // Function to update budget

  // Function to change category filter


  return (
    <>
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App