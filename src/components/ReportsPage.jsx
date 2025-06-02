import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/ReportsPage.css';
const ReportsPage = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch('https://group-13-project-1.onrender.com/budgets');
                const data = await response.json();
                setExpenses(data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="reports-page">
            <Header />
            <h2>Expense Reports</h2>
            <div className="report-summary">
                <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
                <p>Number of Transactions: {expenses.length}</p>
            </div>
        </div>
    );
};

export default ReportsPage;