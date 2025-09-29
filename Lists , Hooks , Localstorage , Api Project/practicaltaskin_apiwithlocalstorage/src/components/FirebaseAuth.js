import React, { useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider 
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import './FirebaseAuth.css';

const FirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    // Return cleanup function
    return unsubscribe;
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      setError(null);
      
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError(`Failed to sign in with Google: ${error.message}`);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      setError(`Failed to sign out: ${error.message}`);
    }
  };

  if (isLoading) {
    return (
      <div className="firebase-auth-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Checking authentication status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="firebase-auth-container">
      <div className="auth-header">
        <h2>Firebase Authentication</h2>
        <p>Google Authentication with Firebase API</p>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => setError(null)} className="dismiss-btn">
            Dismiss
          </button>
        </div>
      )}

      {!user ? (
        <div className="sign-in-section">
          <div className="auth-card">
            <div className="auth-icon">
              🔥
            </div>
            <h3>Sign In with Google</h3>
            <p>Use your Google account to access the application</p>
            
            <button
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              className="google-signin-btn"
            >
              {isSigningIn ? (
                <>
                  <div className="spinner-small"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <span className="google-icon">G</span>
                  Sign in with Google
                </>
              )}
            </button>

            <div className="auth-info">
              <h4>Firebase Features Demonstrated:</h4>
              <ul>
                <li>✅ Google Authentication</li>
                <li>✅ Firebase Auth State Management</li>
                <li>✅ User Profile Information</li>
                <li>✅ Secure Sign Out</li>
                <li>✅ Error Handling</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="user-profile-section">
          <div className="profile-card">
            <div className="profile-header">
              <img 
                src={user.photoURL || 'https://via.placeholder.com/150'} 
                alt={user.displayName || 'User'}
                className="profile-avatar"
              />
              <div className="profile-info">
                <h3>{user.displayName || 'Google User'}</h3>
                <p className="user-email">{user.email}</p>
                <span className="provider-badge">
                  {user.providerData[0]?.providerId === 'google.com' ? 'Google' : 'Unknown'}
                </span>
              </div>
            </div>

            <div className="user-details">
              <div className="detail-item">
                <strong>User ID:</strong>
                <span>{user.uid}</span>
              </div>
              <div className="detail-item">
                <strong>Provider:</strong>
                <span>{user.providerData[0]?.providerId || 'Unknown'}</span>
              </div>
              <div className="detail-item">
                <strong>Email Verified:</strong>
                <span>{user.emailVerified ? 'Yes' : 'No'}</span>
              </div>
              <div className="detail-item">
                <strong>Account Created:</strong>
                <span>{user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Unknown'}</span>
              </div>
            </div>

            <div className="profile-actions">
              <button onClick={handleSignOut} className="signout-btn">
                Sign Out
              </button>
            </div>

            <div className="firebase-status">
              <h4>Firebase Authentication Status</h4>
              <div className="status-indicator active">
                <span className="status-dot"></span>
                Authenticated with Firebase
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="firebase-setup-info">
        <h3>Firebase Setup Instructions</h3>
        <div className="setup-steps">
          <div className="step">
            <span className="step-number">1</span>
            <div className="step-content">
              <h4>Create Firebase Project</h4>
              <p>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase Console</a> and create a new project</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <div className="step-content">
              <h4>Enable Authentication</h4>
              <p>Enable Google sign-in method in Authentication section</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <div className="step-content">
              <h4>Install Firebase SDK</h4>
              <p>Run: <code>npm install firebase</code> ✅ <strong>Completed!</strong></p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <div className="step-content">
              <h4>Configure Firebase</h4>
              <p>Replace the firebaseConfig object in <code>src/firebase/config.js</code> with your project config</p>
              <div className="config-note">
                <strong>Note:</strong> You need to replace the placeholder values in the config file with your actual Firebase project configuration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAuth; 