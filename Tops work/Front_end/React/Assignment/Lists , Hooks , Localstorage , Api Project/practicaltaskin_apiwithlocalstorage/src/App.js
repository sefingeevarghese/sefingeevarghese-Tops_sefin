import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle';
import FirebaseAuth from './components/FirebaseAuth';
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';

// Component that uses the auth context
const AppContent = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <ThemeToggle />
      {isAuthenticated ? <WelcomeMessage /> : <LoginForm />}
      <FirebaseAuth />
    </div>
  );
};

// Main App component with providers
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
