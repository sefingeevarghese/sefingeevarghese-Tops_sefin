// Firebase Service Wrapper
// This file provides a clean interface to Firebase services and handles configuration gracefully

let auth = null;
let provider = null;
let database = null;
let isConfigured = false;

// Try to initialize Firebase
try {
  const { initializeApp } = require('firebase/app');
  const { getAuth, GoogleAuthProvider } = require('firebase/auth');
  const { getDatabase } = require('firebase/database');

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
  };

  // Check if Firebase is properly configured
  if (firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
    database = getDatabase(app);
    isConfigured = true;
    console.log('Firebase initialized successfully');
  } else {
    throw new Error('Firebase not configured');
  }
} catch (error) {
  console.warn('Firebase not available or not configured. Using mock services.');
  createMockServices();
}

function createMockServices() {
  // Mock authentication service
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback) => {
      callback(null);
      return () => {};
    },
    signInWithPopup: () => Promise.reject(new Error('Firebase not configured')),
    signOut: () => Promise.reject(new Error('Firebase not configured'))
  };

  // Mock provider
  provider = {
    addScope: () => provider,
    setCustomParameters: () => provider
  };

  // Mock database service
  database = {
    ref: (path) => ({
      push: (data) => Promise.reject(new Error('Firebase not configured')),
      set: (data) => Promise.reject(new Error('Firebase not configured')),
      remove: () => Promise.reject(new Error('Firebase not configured')),
      update: (data) => Promise.reject(new Error('Firebase not configured')),
      onValue: (callback) => {
        callback({ val: () => null });
        return () => {};
      }
    }),
    _checkNotDeleted: () => {}
  };
}

// Export the services
export { auth, provider, database, isConfigured };

// Export individual functions for convenience
export const signInWithGoogle = async () => {
  if (!isConfigured) {
    throw new Error('Firebase not configured');
  }
  const { signInWithPopup } = require('firebase/auth');
  return signInWithPopup(auth, provider);
};

export const signOut = async () => {
  if (!isConfigured) {
    throw new Error('Firebase not configured');
  }
  const { signOut: firebaseSignOut } = require('firebase/auth');
  return firebaseSignOut(auth);
};

export const onAuthStateChanged = (callback) => {
  if (!isConfigured) {
    callback(null);
    return () => {};
  }
  const { onAuthStateChanged: firebaseOnAuthStateChanged } = require('firebase/auth');
  return firebaseOnAuthStateChanged(auth, callback);
};

export const createPost = async (postData) => {
  if (!isConfigured) {
    throw new Error('Firebase not configured');
  }
  const { ref, push } = require('firebase/database');
  const postsRef = ref(database, 'posts');
  return push(postsRef, postData);
};

export const updatePost = async (postId, updates) => {
  if (!isConfigured) {
    throw new Error('Firebase not configured');
  }
  const { ref, update } = require('firebase/database');
  const postRef = ref(database, `posts/${postId}`);
  return update(postRef, updates);
};

export const deletePost = async (postId) => {
  if (!isConfigured) {
    throw new Error('Firebase not configured');
  }
  const { ref, remove } = require('firebase/database');
  const postRef = ref(database, `posts/${postId}`);
  return remove(postRef);
};

export const listenToPosts = (callback) => {
  if (!isConfigured) {
    callback({ val: () => null });
    return () => {};
  }
  const { ref, onValue } = require('firebase/database');
  const postsRef = ref(database, 'posts');
  return onValue(postsRef, callback);
}; 