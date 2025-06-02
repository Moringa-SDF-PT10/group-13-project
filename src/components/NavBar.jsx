import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // <-- Correct path

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/expenses">Expenses</Link></li>
      <li><Link to="/budget">Budget</Link></li>
      <li><Link to="/reports">Reports</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default NavBar;