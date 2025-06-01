import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAuth } from '../components/AuthContext';
import LoginPage from '../components/LoginPage';

const RouterContext = createContext();

export const Router = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    return (
        <RouterContext.Provider value={{ currentPath, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const Route = ({ path, component: Component, protected: isProtected = false }) => {
    const { currentPath } = useContext(RouterContext);
    const { isAuthenticated } = useAuth();

    if (currentPath !== path) return null;

    if (isProtected && !isAuthenticated) {
        return <LoginPage />;
    }

    return <Component />;
};

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within a Router');
    }
    return context;
};