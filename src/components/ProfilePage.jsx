import React from 'react';
import { useAuth } from '../components/AuthContext';
import Header from '../components/Header';

const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <div className="profile-page">
            <Header />
            <h2>User Profile</h2>
            <p>Username: {user?.username}</p>
        </div>
    );
};

export default ProfilePage;