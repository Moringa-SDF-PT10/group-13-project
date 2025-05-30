import { useEffect, useState } from 'react'
import './App.css'
import Header from './header';
import ExpenseForm from './expenseForm';

function App() {
  const [expense, setExpense] = useState([]);
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






}

export default App