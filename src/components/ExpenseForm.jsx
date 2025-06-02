import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount) return;

        
        const expense = {
            name,
            description: name, 
            amount: Number(amount),
            category,
            date: new Date().toISOString().split('T')[0] 
        };

        onAddExpense(expense);
        setName('');
        setAmount('');
        setCategory('Food');
    };

    return (
        <div className="expense-form"> 
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
