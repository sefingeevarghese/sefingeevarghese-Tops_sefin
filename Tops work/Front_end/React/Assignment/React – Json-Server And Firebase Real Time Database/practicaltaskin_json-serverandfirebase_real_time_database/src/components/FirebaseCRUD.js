import React, { useState, useEffect } from 'react';
import { auth, provider, database } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { ref, push, set, remove, onValue, update } from 'firebase/database';
import LoadingSpinner from './LoadingSpinner';
import './FirebaseCRUD.css';

const FirebaseCRUD = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [editingId, setEditingId] = useState(null);

  // Authentication
  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err.message.includes('Firebase not configured')) {
        setError('Firebase is not configured. Please follow the setup guide in FIREBASE_SETUP.md');
      } else {
        setError('Failed to sign in: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
    } catch (err) {
      if (err.message.includes('Firebase not configured')) {
        setError('Firebase is not configured. Please follow the setup guide in FIREBASE_SETUP.md');
      } else {
        setError('Failed to sign out: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // CRUD Operations
  const createPost = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('Please sign in to create a post');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const newPostRef = ref(database, 'posts');
      const newPost = {
        ...formData,
        author: user.displayName || user.email,
        authorId: user.uid,
        timestamp: Date.now()
      };
      await push(newPostRef, newPost);
      setFormData({ title: '', content: '' });
    } catch (err) {
      if (err.message.includes('Firebase not configured')) {
        setError('Firebase is not configured. Please follow the setup guide in FIREBASE_SETUP.md');
      } else {
        setError('Failed to create post: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('Please sign in to update a post');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const postRef = ref(database, `posts/${editingId}`);
      await update(postRef, {
        title: formData.title,
        content: formData.content,
        updatedAt: Date.now()
      });
      setFormData({ title: '', content: '' });
      setEditingId(null);
    } catch (err) {
      if (err.message.includes('Firebase not configured')) {
        setError('Firebase is not configured. Please follow the setup guide in FIREBASE_SETUP.md');
      } else {
        setError('Failed to update post: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (postId, authorId) => {
    if (!user || user.uid !== authorId) {
      setError('You can only delete your own posts');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const postRef = ref(database, `posts/${postId}`);
      await remove(postRef);
    } catch (err) {
      if (err.message.includes('Firebase not configured')) {
        setError('Firebase is not configured. Please follow the setup guide in FIREBASE_SETUP.md');
      } else {
        setError('Failed to delete post: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post) => {
    if (!user || user.uid !== post.authorId) {
      setError('You can only edit your own posts');
      return;
    }
    setFormData({ title: post.title, content: post.content });
    setEditingId(post.id);
  };

  const handleCancelEdit = () => {
    setFormData({ title: '', content: '' });
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Listen for real-time database changes
  useEffect(() => {
    try {
      const postsRef = ref(database, 'posts');
      const unsubscribe = onValue(postsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const postsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setPosts(postsArray.sort((a, b) => b.timestamp - a.timestamp));
        } else {
          setPosts([]);
        }
      });

      return () => unsubscribe();
    } catch (error) {
      // If Firebase is not configured, just set empty posts
      if (error.message.includes('Firebase not configured')) {
        setPosts([]);
      }
    }
  }, []);

  if (loading && posts.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="firebase-crud">
      <h2>Firebase CRUD with Authentication</h2>
      
      {error && <div className="error-message">{error}</div>}
      
             {/* Authentication Section */}
       <div className="auth-section">
         {user ? (
           <div className="user-info">
             <img src={user.photoURL} alt="Profile" className="profile-pic" />
             <span>Welcome, {user.displayName || user.email}!</span>
             <button onClick={handleSignOut} disabled={loading}>
               Sign Out
             </button>
           </div>
         ) : (
           <div className="sign-in-section">
             <p>Please sign in to create and manage posts</p>
             <button onClick={signInWithGoogle} disabled={loading}>
               Sign in with Google
             </button>
             <div className="setup-notice">
               <p><strong>Note:</strong> Firebase is not configured. To use this feature:</p>
               <ol>
                 <li>Follow the setup guide in <code>FIREBASE_SETUP.md</code></li>
                 <li>Update <code>src/firebase.js</code> with your Firebase configuration</li>
                 <li>Restart the application</li>
               </ol>
             </div>
           </div>
         )}
       </div>

      {/* Post Form */}
      {user && (
        <form onSubmit={editingId ? updatePost : createPost} className="post-form">
          <h3>{editingId ? 'Edit Post' : 'Create New Post'}</h3>
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="content"
            placeholder="Post Content"
            value={formData.content}
            onChange={handleInputChange}
            required
            rows="4"
          />
          <div className="form-buttons">
            <button type="submit" disabled={loading}>
              {editingId ? 'Update Post' : 'Create Post'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </form>
      )}

      {/* Posts List */}
      <div className="posts-section">
        <h3>Posts</h3>
        {loading && <LoadingSpinner />}
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. {!user && 'Sign in to create the first post!'}</p>
        ) : (
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <div className="post-meta">
                  <span>By: {post.author}</span>
                  <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                </div>
                {user && user.uid === post.authorId && (
                  <div className="post-actions">
                    <button onClick={() => handleEdit(post)}>Edit</button>
                    <button onClick={() => deletePost(post.id, post.authorId)}>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FirebaseCRUD; 