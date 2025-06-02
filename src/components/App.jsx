import React from 'react';
import './App.css';
import { AuthProvider } from './components/AuthContext';
import { Router, Route } from './components/common/Router';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ExpensesPage from './components/ExpensesPage';
import AddExpensePage from './components/AddExpensePage';
import BudgetPage from './components/BudgetPage';
import ReportsPage from './components/ReportsPage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Route 1: Home (public) */}
          <Route path="/" component={HomePage} />

          {/* Route 2: Login (public) */}
          <Route path="/login" component={LoginPage} />

          {/* Route 3: Dashboard (protected) */}
          <Route path="/dashboard" component={DashboardPage} protected />

          {/* Route 4: Expenses (protected) */}
          <Route path="/expenses" component={ExpensesPage} protected />

          {/* Route 5: Add Expense (protected) */}
          <Route path="/add-expense" component={AddExpensePage} protected />

          {/* Route 6: Budget (protected) */}
          <Route path="/budget" component={BudgetPage} protected />

          {/* Route 7: Reports (protected) */}
          <Route path="/reports" component={ReportsPage} protected />

          {/* Route 8: Profile (protected) */}
          <Route path="/profile" component={ProfilePage} protected />

          {/* Route 9: Settings (public) */}
          <Route path="/settings" component={SettingsPage} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;