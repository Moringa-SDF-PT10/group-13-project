import React, { useState } from 'react';
import { updateExpense, deleteExpense } from './apiService';
import './ExpenseItem.css';

function ExpenseItem({ expense, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({...expense});
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    setIsUpdating(true);
    setError(null);
    
    try {
      const updatedExpense = await updateExpense(expense.id, editedExpense);
      onUpdate(updatedExpense);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update expense. Please try again.');
      console.error('Error updating expense:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this expense?')) return;
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await deleteExpense(expense.id);
      onDelete(expense.id);
    } catch (err) {
      setError('Failed to delete expense. Please try again.');
      console.error('Error deleting expense:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="expense-item">
      {error && <div className="error-message">{error}</div>}
      
      {isEditing ? (
        <>
          {/* Editing form remains the same */}
          <button 
            onClick={handleUpdate} 
            className="save-btn"
            disabled={isUpdating}
          >
            {isUpdating ? 'Saving...' : 'Save'}
          </button>
        </>
      ) : (
        <>
          {/* Display view remains the same */}
          <div className="expense-actions">
            <button 
              onClick={() => setIsEditing(true)} 
              className="edit-btn"
              disabled={isDeleting}
            >
              Edit
            </button>
            <button 
              onClick={handleDelete} 
              className="delete-btn"
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ExpenseItem;