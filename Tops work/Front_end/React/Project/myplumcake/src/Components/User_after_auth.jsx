import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function User_after_auth({ children }) {
    const location = useLocation();
    
    // Simple synchronous check - no state management
    const userId = localStorage.getItem('u_id');
    const userName = localStorage.getItem('u_name');
    const userEmail = localStorage.getItem('u_email');
    const isAdmin = localStorage.getItem('isAdmin');

    // If not authenticated, redirect to login with return URL
    if (!userId || !userName || !userEmail) {
        const returnUrl = location.pathname + location.search;
        const loginUrl = returnUrl !== '/' ? `/login?returnUrl=${encodeURIComponent(returnUrl)}` : '/login';
        
        // Show toast notification
        toast.error('Please login to access this page', {
            position: "top-right",
            autoClose: 3000,
        });

        return <Navigate to={loginUrl} replace />;
    }

    // If authenticated, render the protected content
    if (children) return children;
    return <Outlet context={{ 
        userData: {
            id: userId,
            name: userName,
            email: userEmail,
            isAdmin: isAdmin === 'true'
        }, 
        isAuthenticated: true 
    }} />;
}

export default User_after_auth;
