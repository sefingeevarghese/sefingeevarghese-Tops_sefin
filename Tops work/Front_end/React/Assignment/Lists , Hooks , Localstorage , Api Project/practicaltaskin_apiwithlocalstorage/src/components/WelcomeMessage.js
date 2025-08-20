import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PostManager from './PostManager';
import Dashboard from './Dashboard';
import UserSettings from './UserSettings';
import Search from './Search';
import PublicAPITable from './PublicAPITable';
import FirebaseAuth from './FirebaseAuth';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

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
        
        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`nav-tab ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            📝 My Posts
          </button>
          <button 
            className={`nav-tab ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            🔍 Search
          </button>
          <button 
            className={`nav-tab ${activeTab === 'public-api' ? 'active' : ''}`}
            onClick={() => setActiveTab('public-api')}
          >
            🌐 Public API
          </button>
          <button 
            className={`nav-tab ${activeTab === 'firebase' ? 'active' : ''}`}
            onClick={() => setActiveTab('firebase')}
          >
            🔥 Firebase
          </button>
          <button 
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button 
            className={`nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              <Dashboard 
                onCreatePost={() => setActiveTab('posts')}
                onOpenSettings={() => setActiveTab('settings')}
                onViewAnalytics={() => setActiveTab('dashboard')}
                onOpenMessages={() => setActiveTab('profile')}
                onViewAllPosts={() => setActiveTab('posts')}
              />
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="posts-content">
              <PostManager />
            </div>
          )}

          {activeTab === 'search' && (
            <div className="search-content">
              <Search />
            </div>
          )}

          {activeTab === 'public-api' && (
            <div className="public-api-content">
              <PublicAPITable />
            </div>
          )}

          {activeTab === 'firebase' && (
            <div className="firebase-content">
              <FirebaseAuth />
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="profile-content">
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
                  <span className="info-value">{formatLoginTime(user.lastLogin || user.loginTime)}</span>
                </div>
                {user.createdAt && (
                  <div className="info-item">
                    <span className="info-label">Member Since:</span>
                    <span className="info-value">{new Date(user.createdAt).toLocaleDateString()}</span>
                  </div>
                )}
                {user.bio && (
                  <div className="info-item">
                    <span className="info-label">Bio:</span>
                    <span className="info-value">{user.bio}</span>
                  </div>
                )}
              </div>
              
              <div className="welcome-actions">
                <button onClick={logout} className="logout-button">
                  Sign Out
                </button>
              </div>
              
              <div className="demo-note">
                <p>🎉 This demonstrates the Context API for global state management!</p>
                <p>Your login state persists across page refreshes using localStorage.</p>
                <p>💡 Explore all the features using the navigation tabs above!</p>
                <p>📋 All tasks from your requirements are now implemented:</p>
                <ul>
                  <li>✅ Task 1: Public API + JSON Server CRUD (GET, POST, PUT, DELETE, PATCH)</li>
                  <li>✅ Task 2: Firebase Authentication with Google Sign-in</li>
                  <li>✅ Task 3: Error handling and loading states with spinners</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content">
              <UserSettings />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage; 