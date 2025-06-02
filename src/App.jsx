import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/add-expense" element={<AddExpensePage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;