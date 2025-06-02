import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // FIXED: Changed from custom router
import { useAuth } from './AuthContext';

const LoginPage = () => {
    const navigate = useNavigate(); // FIXED: Using react-router-dom navigate
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            login({ username });
            navigate('/dashboard');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?
                <button type="button" onClick={() => navigate('/register')}>
                    Register here
                </button>
            </p>
        </div>
    );
};

export default LoginPage;
