# React Context API Project

A simple React.js application demonstrating the use of Context API for global state management, featuring theme toggle (light/dark mode) and user authentication.

## Features

### Task 1: Theme Toggle (Light/Dark Mode)
- **Context API Implementation**: Uses `ThemeContext` to manage theme state globally
- **Persistent Storage**: Theme preference is saved to localStorage
- **System Preference Detection**: Automatically detects user's system theme preference
- **Smooth Transitions**: CSS transitions for seamless theme switching
- **Responsive Design**: Works on all device sizes

### Task 2: User Authentication System
- **Context API Implementation**: Uses `AuthContext` to manage authentication state globally
- **Persistent Login**: User session persists across page refreshes using localStorage
- **Welcome Message**: Displays personalized welcome message when logged in
- **Login Form**: Clean, modern login interface with validation
- **User Information Display**: Shows user details including login time

## Project Structure

```
src/
├── contexts/
│   ├── ThemeContext.js      # Theme state management
│   └── AuthContext.js       # Authentication state management
├── components/
│   ├── ThemeToggle.js       # Theme toggle button component
│   ├── ThemeToggle.css      # Theme toggle styles
│   ├── LoginForm.js         # Login form component
│   ├── LoginForm.css        # Login form styles
│   ├── WelcomeMessage.js    # Welcome message component
│   └── WelcomeMessage.css   # Welcome message styles
├── App.js                   # Main application component
├── App.css                  # Global styles and CSS variables
└── index.js                 # Application entry point
```

## How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Open Browser**:
   Navigate to `http://localhost:3000`

## Usage

### Theme Toggle
- Click the theme toggle button (🌙/☀️) in the top-right corner
- Theme preference is automatically saved
- System preference is detected on first visit

### Authentication
- **Login**: Use any email and password (minimum 6 characters)
- **Demo Mode**: No real authentication - just demonstrates the Context API
- **Logout**: Click "Sign Out" button when logged in
- **Persistence**: Login state persists across browser refreshes

## Technical Implementation

### Context API Usage
- **ThemeContext**: Manages `isDarkMode` state and `toggleTheme` function
- **AuthContext**: Manages `user` state, `login`, `logout` functions, and `isAuthenticated` boolean

### CSS Variables for Theming
- Light and dark theme variables defined in `App.css`
- Smooth transitions between themes
- Responsive design with mobile-first approach

### LocalStorage Integration
- Theme preference stored as `'theme'` key
- User data stored as `'user'` key
- Automatic restoration on app load

## Key Learning Points

1. **Context API**: Global state management without prop drilling
2. **Custom Hooks**: `useTheme()` and `useAuth()` for easy context consumption
3. **CSS Variables**: Dynamic theming with CSS custom properties
4. **LocalStorage**: Persistent state across browser sessions
5. **Component Composition**: Clean separation of concerns
6. **Responsive Design**: Mobile-friendly interface

## Browser Compatibility

- Modern browsers with ES6+ support
- CSS Variables support required for theming
- LocalStorage support for persistence

## Future Enhancements

- Real API integration for authentication
- User registration functionality
- Password reset capabilities
- More theme options
- Animation improvements
- Unit tests implementation
