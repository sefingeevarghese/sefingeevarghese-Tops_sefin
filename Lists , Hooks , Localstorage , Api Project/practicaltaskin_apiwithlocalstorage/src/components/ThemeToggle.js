import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme}
        className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
        <span className="toggle-text">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle; 