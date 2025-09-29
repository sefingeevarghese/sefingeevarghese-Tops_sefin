import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Admin_after_auth({ children }) {
    const navigate = useNavigate();
    const userId = localStorage.getItem('u_id');
    const userName = localStorage.getItem('u_name');
    const userEmail = localStorage.getItem('u_email');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const isLoggedIn = userId && userName && userEmail;

    // If not logged in, redirect to the login page
    if (!isLoggedIn) {
        toast.error('Please log in to access the admin panel.');
        return <Navigate to="/login" replace />;
    }

    // If logged in but not an admin, show an unauthorized message
    if (!isAdmin) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f8f9fa'
            }}>
                <div>
                    <h1 style={{ fontSize: '3rem', color: '#dc3545' }}>Unauthorized Access</h1>
                    <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                        You do not have permission to view this page.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            padding: '10px 20px',
                            fontSize: '1rem',
                            color: '#fff',
                            backgroundColor: '#007bff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        );
    }

    // If authenticated and is an admin, render the admin content
    return children;
}

export default Admin_after_auth;
