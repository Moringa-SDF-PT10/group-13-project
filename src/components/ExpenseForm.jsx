import React, { useState } from 'react';
import '../styles/ExpenseForm.css';
import '../styles/ExpenseList.css';
import '../styles/ExpenseList.css';
function ExpenseForm({ onAddExpense }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount) return;

        // FIXED: Added date field to match API expectations
        const expense = {
            name,
            description: name, // FIXED: Added description field
            amount: Number(amount),
            category,
            date: new Date().toISOString().split('T')[0] // FIXED: Added current date
        };

        onAddExpense(expense);
        setName('');
        setAmount('');
        setCategory('Food');
    };

    return (
        <div className="expense-form"> {/* FIXED: Added wrapper div with class */}
            <h3>Add Expense</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Expense name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>Utilities</option>
                    <option>Transport</option>
                    <option>Entertainment</option>
                </select>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;