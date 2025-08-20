import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { postAPI } from '../services/api';
import './PostManager.css';

const PostManager = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    if (!user) {
      setPosts([]);
      setIsLoading(false);
      return;
    }
    loadPosts();
  }, [user]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const userPosts = await postAPI.getByUserId(user.id);
      setPosts(userPosts);
    } catch (error) {
      setError('Failed to load posts: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (editingPost) {
        // Update existing post
        await postAPI.update(editingPost.id, {
          ...editingPost,
          ...formData,
          updatedAt: new Date().toISOString()
        });
        setEditingPost(null);
      } else {
        // Create new post
        await postAPI.create({
          ...formData,
          userId: user.id,
          createdAt: new Date().toISOString()
        });
      }
      
      setFormData({ title: '', content: '' });
      setIsCreating(false);
      loadPosts();
    } catch (error) {
      alert('Failed to save post: ' + error.message);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content
    });
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      await postAPI.delete(postId);
      loadPosts();
    } catch (error) {
      alert('Failed to delete post: ' + error.message);
    }
  };

  const handleCancel = () => {
    setEditingPost(null);
    setFormData({ title: '', content: '' });
    setIsCreating(false);
  };

  if (isLoading) {
    return (
      <div className="post-manager">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="post-manager">
      <div className="post-manager-header">
        <h2>My Posts</h2>
        <button 
          onClick={() => setIsCreating(!isCreating)}
          className="create-post-btn"
        >
          {isCreating ? 'Cancel' : 'Create New Post'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {/* Create/Edit Form */}
      {(isCreating || editingPost) && (
        <div className="post-form-container">
          <h3>{editingPost ? 'Edit Post' : 'Create New Post'}</h3>
          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter post title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Enter post content"
                rows="4"
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
              {editingPost && (
                <button type="button" onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Posts List */}
      <div className="posts-list">
        {posts.length === 0 ? (
          <div className="no-posts">
            <p>No posts yet. Create your first post!</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <h3>{post.title}</h3>
                <div className="post-actions">
                  <button 
                    onClick={() => handleEdit(post)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-meta">
                <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                {post.updatedAt && (
                  <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostManager; 