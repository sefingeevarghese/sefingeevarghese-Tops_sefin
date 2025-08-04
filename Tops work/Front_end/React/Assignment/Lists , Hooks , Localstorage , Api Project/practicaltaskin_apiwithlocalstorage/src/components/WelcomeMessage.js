import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  const { user, logout } = useAuth();

  const formatLoginTime = (loginTime) => {
    return new Date(loginTime).toLocaleString();
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-header">
          <div className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1>Welcome, {user.name}! 👋</h1>
          <p className="welcome-subtitle">You're successfully logged in</p>
        </div>
        
        <div className="user-info">
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">User ID:</span>
            <span className="info-value">{user.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Login Time:</span>
            <span className="info-value">{formatLoginTime(user.loginTime)}</span>
          </div>
        </div>
        
        <div className="welcome-actions">
          <button onClick={logout} className="logout-button">
            Sign Out
          </button>
        </div>
        
        <div className="demo-note">
          <p>🎉 This demonstrates the Context API for global state management!</p>
          <p>Your login state persists across page refreshes using localStorage.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage; 