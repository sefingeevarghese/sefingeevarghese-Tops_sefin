import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Dev-only: log API key to verify env loading
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);




export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;