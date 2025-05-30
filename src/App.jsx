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
      const response = await fetch(`${API_BASE_URL}`);
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
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






}

export default App