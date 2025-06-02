import React, { useState } from 'react';

function BudgetSetter({ budget, onSetBudget }) {
    const [newBudget, setNewBudget] = useState(budget);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newBudget) return;
        onSetBudget(Number(newBudget));
    };

    return (
        <div className="budget-setter">
            <h3>Set Budget</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    placeholder="Enter budget amount"
                />
                <button type="submit">Set Budget</button>
            </form>
            <p>Current Budget: ${budget}</p>
        </div>
    );
}

export default BudgetSetter;