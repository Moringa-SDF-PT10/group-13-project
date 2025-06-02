import React from 'react';
import { useAuth } from '../components/AuthContext';
import { useRouter } from '../components/Router';
import Header from '../components/Header';

const DashboardPage = () => {
    const { user, logout } = useAuth();
    const { navigate } = useRouter();

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