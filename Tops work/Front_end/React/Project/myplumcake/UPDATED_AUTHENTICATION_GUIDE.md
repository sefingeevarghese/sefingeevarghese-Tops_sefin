# Updated Authentication System Guide

## Overview
The Plum Cake Bliss application now has a complete authentication system with separate Login and Signup pages, user registration, login, logout, and admin functionality.

## New Features Added

### 1. Separate Signup Page
- **Dedicated Signup Component**: `src/Components/Signup.jsx`
- **Enhanced Validation**: Email format, password strength, mobile number validation
- **Email Uniqueness Check**: Prevents duplicate email registrations
- **Modern UI**: Consistent with the login page design
- **Auto-redirect**: After successful signup, redirects to login page

### 2. Improved Login Page
- **Toggle Functionality**: Switch between login and signup modes
- **Demo Credentials**: Built-in demo accounts for testing
- **Link to Signup**: Direct link to the separate signup page
- **Better Error Handling**: More specific error messages

### 3. Enhanced Header Navigation
- **Dual Buttons**: Separate Login and Signup buttons when not logged in
- **User Menu**: Dropdown menu for logged-in users
- **Admin Access**: Special admin menu for admin users
- **Responsive Design**: Works on all screen sizes

### 4. Toast Notifications
- **React Toastify**: Beautiful toast notifications
- **Success Messages**: Confirmation for successful actions
- **Error Messages**: Clear error feedback
- **Auto-dismiss**: Notifications disappear automatically

## File Structure

```
src/
├── Components/
│   ├── LoginSignup.jsx      # Combined login/signup form
│   ├── Signup.jsx           # Dedicated signup page
│   ├── LoginSignup.css      # Styling for auth forms
│   └── Header.jsx           # Navigation with auth state
├── utils/
│   └── auth.js              # Authentication utilities
└── pages/
    ├── website/             # Public website pages
    └── admin/               # Admin-only pages
```

## Routes

### Authentication Routes
- `/loginsignup` - Combined login/signup page
- `/signup` - Dedicated signup page

### Navigation Flow
1. **New Users**: `/signup` → Create account → Redirect to `/loginsignup`
2. **Existing Users**: `/loginsignup` → Login → Redirect to `/`
3. **Admin Users**: `/loginsignup` → Admin login → Redirect to `/admin/dashboard`

## Login Credentials

### Admin Access
- **Email**: admin@gmail.com
- **Password**: 123456
- **Access**: Full admin dashboard and user management

### Demo User
- **Email**: demo@gmail.com
- **Password**: 123456
- **Access**: Regular user features

## Validation Rules

### Signup Validation
- **Name**: Minimum 2 characters, required
- **Email**: Valid email format, unique, required
- **Password**: Minimum 6 characters, required
- **Confirm Password**: Must match password, required
- **Mobile**: 10 digits only, required

### Login Validation
- **Email**: Valid email format, required
- **Password**: Required
- **Account Status**: Must not be blocked

## API Integration

### User Endpoints
- `GET /user` - Get all users (for email uniqueness check)
- `POST /user` - Create new user
- `GET /user?email=...` - Check specific user by email

### Authentication Flow
1. **Signup**: POST to `/user` with user data
2. **Login**: GET `/user` and filter by email/password
3. **Session**: Store user data in localStorage

## Error Handling

### Signup Errors
- "Name Field is required"
- "Name must be at least 2 characters long"
- "Please enter a valid email address"
- "User with this email already exists"
- "Password must be at least 6 characters long"
- "Passwords do not match"
- "Please enter a valid 10-digit mobile number"

### Login Errors
- "Invalid email or password"
- "Your account has been blocked"
- "Login failed. Please try again."

## UI/UX Features

### Design Elements
- **Gradient Background**: Modern purple gradient
- **Card Layout**: Clean white cards with shadows
- **Responsive Design**: Works on mobile and desktop
- **Loading States**: Disabled buttons during processing
- **Hover Effects**: Interactive button animations

### User Experience
- **Auto-redirect**: Logged-in users redirected to home
- **Form Reset**: Forms clear after successful submission
- **Error Clearing**: Errors clear when user starts typing
- **Confirmation Dialogs**: SweetAlert for important actions

## Security Features

### Client-side Security
- **Input Validation**: All inputs validated before submission
- **Email Uniqueness**: Prevents duplicate accounts
- **Password Confirmation**: Ensures password is entered correctly
- **Account Status**: Blocks disabled accounts

### Session Management
- **localStorage**: Persistent login sessions
- **Auto-logout**: Clear session on logout
- **Route Protection**: Admin routes protected

## Usage Examples

### Creating a New User
```javascript
// User fills signup form
// System validates all inputs
// Checks email uniqueness
// Creates user in JSON server
// Shows success message
// Redirects to login
```

### User Login
```javascript
// User enters credentials
// System validates format
// Checks against user database
// Verifies account status
// Creates session
// Redirects to appropriate page
```

### Admin Login
```javascript
// Admin enters special credentials
// System validates admin access
// Creates admin session
// Shows admin menu
// Redirects to dashboard
```

## Styling Classes

### Auth Container
- `.auth-container` - Main container with gradient background
- `.auth-box` - White card with shadow
- `.auth-header` - Header section with title
- `.auth-form` - Form container
- `.auth-footer` - Footer with links

### Form Elements
- `.form-group` - Input group wrapper
- `.form-input` - Styled input fields
- `.submit-btn` - Primary action button
- `.toggle-btn` - Secondary action button
- `.error-message` - Error display

## Future Enhancements

### Planned Features
1. **Password Reset**: Email-based recovery
2. **Email Verification**: Account activation
3. **Social Login**: Google, Facebook integration
4. **Remember Me**: Extended sessions
5. **Two-Factor Auth**: SMS verification
6. **Profile Management**: User profile editing

### Technical Improvements
1. **Server-side Validation**: Backend validation
2. **Password Hashing**: Secure password storage
3. **JWT Tokens**: Stateless authentication
4. **Rate Limiting**: Prevent brute force attacks
5. **HTTPS**: Secure connections

## Troubleshooting

### Common Issues
1. **JSON Server Not Running**: Start with `npm run server`
2. **Port Conflicts**: Ensure ports 3000 and 3001 are free
3. **CORS Issues**: Check JSON server configuration
4. **localStorage Errors**: Clear browser data

### Debug Steps
1. Check browser console for errors
2. Verify JSON server is running
3. Test API endpoints directly
4. Clear localStorage and try again
5. Check network tab for failed requests

## Conclusion

The updated authentication system provides a complete, user-friendly experience with proper validation, error handling, and modern UI design. The separation of login and signup pages improves user experience while maintaining security and functionality.
