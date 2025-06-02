import React from 'react';
import { useRouter } from '../components/Router';
import Header from '../components/Header';

const HomePage = () => {
    const { navigate } = useRouter();

    return (
        <div className="home-page">
            <Header />
            <h2>Welcome to Expense Tracker</h2>
            <p>Track your expenses and manage your budget effectively.</p>
            <button onClick={() => navigate('/login')}>Get Started</button>
        </div>
    );
};

export default HomePage;