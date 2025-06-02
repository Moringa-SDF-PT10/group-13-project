import React from 'react';
import Header from './Header';
import '../styles/SettingsPage.css';
const SettingsPage = () => {
    return (
        <div className="settings-page">
            <Header />
            <h2>Settings</h2>
            <p>Application settings and preferences.</p>
        </div>
    );
};

export default SettingsPage;