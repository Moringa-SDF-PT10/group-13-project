import React, { useState } from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

const AddExpensePage = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = async (newExpense) => {
        try {
            const response = await fetch('https://group-13-project.onrender.com/expenses', {
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

    return (
        <div className="add-expense-page">
            <Header />
            <ExpenseForm onAddExpense={addExpense} />
        </div>
    );
};

export default AddExpensePage;