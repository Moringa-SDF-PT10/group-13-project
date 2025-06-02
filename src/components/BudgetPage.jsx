import React, { useState } from 'react';
import Header from './Header';
import BudgetSetter from './BudgetSetter';
import '../styles/BudgetPage.css';

const BudgetPage = () => {
    const [budget, setBudget] = useState(0);

    const updateBudget = async (amount) => {
        try {
            const response = await fetch('https://group-13-project-1.onrender.com/budgets/1', {
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

    return (
        <div className="budget-page">
            <Header />
            <BudgetSetter budget={budget} onSetBudget={updateBudget} />
        </div>
    );
};

export default BudgetPage;