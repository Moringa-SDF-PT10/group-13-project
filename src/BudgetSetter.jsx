import React, { useState, useEffect } from 'react';
import { getBudget, setBudget } from './apiService';
import './BudgetSetter.css';

function BudgetSetter() {
  const [budget, setLocalBudget] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const data = await getBudget();
        setLocalBudget(data.amount || 0);
      } catch (error) {
        console.error('Error fetching budget:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBudget();
  }, []);

  const handleBudgetChange = async (e) => {
    const newBudget = Number(e.target.value);
    setLocalBudget(newBudget);
    
    try {
      await setBudget(newBudget);
    } catch (error) {
      console.error('Error updating budget:', error);
    }
  };

  if (isLoading) {
    return <div className="budget-setter">Loading budget...</div>;
  }

  return (
    <div className="budget-setter">
      <h2 className="budget-title">Set Your Budget</h2>
      <input
        type="number"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter your budget"
        className="budget-input"
        min="0"
      />
    </div>
  );
}

export default BudgetSetter;