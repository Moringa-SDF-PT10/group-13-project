import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // FIXED: Changed from custom router
import Header from './Header';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate(); // FIXED: Using react-router-dom navigate

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-header">
                <h2>Welcome, {user?.username}!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="dashboard-links">
                <button onClick={() => navigate('/expenses')}>View Expenses</button>
                <button onClick={() => navigate('/add-expense')}>Add Expense</button>
                <button onClick={() => navigate('/budget')}>Manage Budget</button>
                <button onClick={() => navigate('/reports')}>View Reports</button>
            </div>
        </div>
    );
};

export default DashboardPage;