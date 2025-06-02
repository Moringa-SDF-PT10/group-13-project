import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../styles/NavBar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">💸 ExpenseTrackr</div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/add-expense">Add</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {isAuthenticated && (
          <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
        )}
        <li>
          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
