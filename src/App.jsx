import { useState } from 'react'
import './App.css'
import Header from './header';
import ExpenseForm from './expenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [importantExpenses, setImportantExpenses] = useState({});
  const [editingExpense, setEditingExpense] = useState(null);
  const [showImportantOnly, setShowImportantOnly] = useState(false);


  const API_BASE_URL = "https://group-13-project.onrender.com/"

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response await fetch(`${API_BASE_URL}expenses`);
      if (response.ok) {
        const data = await response.json();
        setImportantExpenses(data);
      } else {
        console.error("Failed to fetch expenses:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };



  const addExpense = async (newExpense) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
      });

      if (response.ok) {
        const data = await response.json();
        setExpenses([data, ...expenses]);
        setShowForm(false);
      } else {
        console.error("Failed to add expense:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    } finally {
      setLoading(false);
    }
  };


   const updateExpense = async (updatedExpense) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/${editingExpense.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedExpense,
          id: editingExpense.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setExpenses(expenses.map(expense =>
          expense.id === editingExpense.id ? data : expense
        ));
        setEditingExpense(null);
        setShowForm(false);
      } else {
        console.error("Failed to update expense:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating expense:", error);
    } finally {
      setLoading(false);
    }
  };

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
