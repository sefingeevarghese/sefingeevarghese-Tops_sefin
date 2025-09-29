import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { postAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = ({
  onCreatePost = () => {},
  onOpenSettings = () => {},
  onViewAnalytics = () => {},
  onOpenMessages = () => {},
  onViewAllPosts = () => {},
}) => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalViews: 0,
    totalLikes: 0,
    recentPosts: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboardData = useCallback(async () => {
    try {
      if (!user) {
        setStats({ totalPosts: 0, totalViews: 0, totalLikes: 0, recentPosts: [] });
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      const userPosts = await postAPI.getByUserId(user.id);
      
      // Calculate statistics
      const totalPosts = userPosts.length;
      const totalViews = userPosts.reduce((sum, post) => sum + (post.views || 0), 0);
      const totalLikes = userPosts.reduce((sum, post) => sum + (post.likes || 0), 0);
      const recentPosts = [...userPosts]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

      setStats({
        totalPosts,
        totalViews,
        totalLikes,
        recentPosts
      });
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
      setError('Failed to load dashboard data: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  if (isLoading) {
    return (
      <div className="dashboard">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p className="dashboard-subtitle">Welcome back, {user.name}! Here's your overview.</p>
      </div>

      <div className="dashboard-actions">
        <button className="refresh-btn" onClick={loadDashboardData}>↻ Refresh</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>{stats.totalPosts}</h3>
            <p>Total Posts</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-content">
            <h3>{stats.totalViews}</h3>
            <p>Total Views</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <div className="stat-content">
            <h3>{stats.totalLikes}</h3>
            <p>Total Likes</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{stats.totalPosts > 0 ? (stats.totalLikes / stats.totalPosts).toFixed(1) : 0}</h3>
            <p>Avg. Likes/Post</p>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="recent-posts-section">
        <h3>Recent Posts</h3>
        <div className="recent-posts-grid">
          {stats.recentPosts.length === 0 ? (
            <div className="no-posts">
              <p>No posts yet. Create your first post!</p>
            </div>
          ) : (
            stats.recentPosts.map(post => (
              <div key={post.id} className="recent-post-card">
                <h4>{post.title}</h4>
                <p className="post-excerpt">
                  {post.content.length > 100 
                    ? `${post.content.substring(0, 100)}...` 
                    : post.content
                  }
                </p>
                <div className="post-meta">
                  <span>📅 {new Date(post.createdAt).toLocaleDateString()}</span>
                  {post.views && <span>👁️ {post.views} views</span>}
                  {post.likes && <span>❤️ {post.likes} likes</span>}
                </div>
              </div>
            ))
          )}
        </div>
        {stats.recentPosts.length > 0 && (
          <div className="recent-posts-footer">
            <button className="view-all-btn" onClick={onViewAllPosts}>View All Posts</button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn" onClick={onCreatePost}>
            <span className="action-icon">✏️</span>
            <span>Create New Post</span>
          </button>
          <button className="action-btn" onClick={onViewAnalytics}>
            <span className="action-icon">📊</span>
            <span>View Analytics</span>
          </button>
          <button className="action-btn" onClick={onOpenSettings}>
            <span className="action-icon">⚙️</span>
            <span>Settings</span>
          </button>
          <button className="action-btn" onClick={onOpenMessages}>
            <span className="action-icon">📧</span>
            <span>Messages</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 