import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// IMPORTANT: Replace these values with your actual Firebase configuration
// Get these values from your Firebase Console: https://console.firebase.google.com/
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
const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY_HERE";

let app, auth, provider, database;

if (isFirebaseConfigured) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  
  // Initialize Realtime Database and get a reference to the service
  database = getDatabase(app);
} else {
  console.warn('Firebase is not configured. Please update src/firebase.js with your Firebase configuration.');
  
  // Create mock objects for development
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback) => {
      callback(null);
      return () => {};
    },
    signInWithPopup: () => Promise.reject(new Error('Firebase not configured')),
    signOut: () => Promise.reject(new Error('Firebase not configured'))
  };
  
  provider = {};
  
  database = {
    ref: (path) => ({
      push: (data) => Promise.reject(new Error('Firebase not configured')),
      set: (data) => Promise.reject(new Error('Firebase not configured')),
      remove: () => Promise.reject(new Error('Firebase not configured')),
      update: (data) => Promise.reject(new Error('Firebase not configured')),
      onValue: (callback) => {
        // Call callback with empty data immediately
        callback({ val: () => null });
        return () => {}; // Return unsubscribe function
      }
    }),
    // Add the _checkNotDeleted method that Firebase expects
    _checkNotDeleted: () => {}
  };
}

export { auth, provider, database };
export default app; 