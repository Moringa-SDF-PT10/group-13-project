import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (username && email && password && password === confirmPassword) {
            try {
                const response = await fetch('https://group-13-project-1.onrender.com/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: Date.now(),
                        username,
                        email,
                        password
                    })
                });

                if (response.ok) {
                    const userData = await response.json();
                    register({ username, email });
                    navigate('/dashboard');
                } else {
                    console.error('Registration failed');
                }
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    };

    return (
        <div className="register-page">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account?
                <button type="button" onClick={() => navigate('/login')}>
                    Login here
                </button>
            </p>
        </div>
    );
};

export default RegisterPage;