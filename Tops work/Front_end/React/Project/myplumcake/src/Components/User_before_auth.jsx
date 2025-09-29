import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

function User_before_auth({ children }) {
    // Simple synchronous check - no state management
    const userId = localStorage.getItem('u_id');
    const userName = localStorage.getItem('u_name');
    const userEmail = localStorage.getItem('u_email');
    const isAdmin = localStorage.getItem('isAdmin');

    // If user is authenticated, redirect based on their role
    if (userId && userName && userEmail) {
        
        // Show toast notification
        toast.info(`Welcome back, ${userName}! You're already logged in.`, {
            position: "top-right",
            autoClose: 3000,
        });

        // Redirect admin to admin dashboard, regular users to home
        if (isAdmin === 'true') {
            return <Navigate to="/admin/dashboard" replace />;
        } else {
            return <Navigate to="/" replace />;
        }
    }

    // If not authenticated, render children if provided, else fallback to Outlet
    if (children) return children;
    return <Outlet context={{ userData: null, isAuthenticated: false }} />;
}

export default User_before_auth;
