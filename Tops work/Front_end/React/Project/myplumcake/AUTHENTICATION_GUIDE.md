# Authentication System Guide

## Overview
The Plum Cake Bliss application now has a complete authentication system with user registration, login, logout, and admin functionality.

## Features Implemented

### 1. User Authentication
- **User Registration**: New users can create accounts with email, password, name, and mobile number
- **User Login**: Existing users can log in with email and password
- **Account Status**: Users can be blocked/unblocked by admin
- **Session Management**: User sessions are maintained using localStorage

### 2. Admin Authentication
- **Admin Login**: Special admin credentials for administrative access
- **Admin Dashboard**: Protected admin routes and functionality
- **User Management**: Admins can manage user accounts

### 3. Security Features
- **Password Validation**: Minimum 6 characters required
- **Account Blocking**: Admins can block user accounts
- **Session Persistence**: Login state persists across browser sessions
- **Route Protection**: Admin routes are protected from unauthorized access

## Login Credentials

### Admin Access
- **Email**: admin@gmail.com
- **Password**: 123456
- **Access**: Full admin dashboard and user management

### Demo User
- **Email**: demo@gmail.com
- **Password**: 123456
- **Access**: Regular user features

## File Structure

```
src/
├── Components/
│   ├── LoginSignup.jsx      # Login/Signup form
│   ├── LoginSignup.css      # Styling for auth forms
│   └── Header.jsx           # Navigation with auth state
├── utils/
│   └── auth.js              # Authentication utilities
└── pages/
    ├── website/             # Public website pages
    └── admin/               # Admin-only pages
```

## Authentication Flow

### 1. User Registration
1. User fills out signup form
2. System validates input (email uniqueness, password strength)
3. New user is created in JSON server
4. Success message shown, user redirected to login

### 2. User Login
1. User enters email and password
2. System checks credentials against JSON server
3. If valid and account not blocked:
   - User data stored in localStorage
   - User redirected to homepage
   - Success message shown
4. If invalid or blocked:
   - Error message displayed

### 3. Admin Login
1. Admin enters special credentials
2. System validates admin credentials
3. If valid:
   - Admin session created
   - Redirected to admin dashboard
   - Admin menu appears in header

### 4. Logout
1. User clicks logout button
2. Confirmation dialog appears
3. If confirmed:
   - All localStorage data cleared
   - User redirected to homepage
   - Success message shown

## localStorage Keys

The system uses the following localStorage keys:

- `u_id`: User ID (or 'admin' for admin)
- `u_name`: User's display name
- `u_email`: User's email address
- `u_mobile`: User's mobile number
- `isAdmin`: Boolean string ('true'/'false')

## API Integration

### User Endpoints
- `GET /user` - Get all users
- `POST /user` - Create new user
- `PATCH /user/:id` - Update user (for admin)
- `DELETE /user/:id` - Delete user (for admin)

### Authentication Checks
- **Regular Users**: Can access website pages
- **Admin Users**: Can access admin dashboard and management pages
- **Blocked Users**: Cannot login, shown error message

## Usage Examples

### Check if user is logged in
```javascript
import { isAuthenticated } from '../utils/auth';

if (isAuthenticated()) {
    // User is logged in
}
```

### Get current user data
```javascript
import { getCurrentUser } from '../utils/auth';

const user = getCurrentUser();
if (user) {
    console.log(user.name, user.email);
}
```

### Protect admin routes
```javascript
import { requireAdmin } from '../utils/auth';

const AdminComponent = requireAdmin(YourAdminComponent);
```

## Error Handling

### Common Error Messages
- "Invalid email or password" - Wrong credentials
- "Your account has been blocked" - Account blocked by admin
- "User with this email already exists" - Email already registered
- "Passwords do not match" - Password confirmation mismatch
- "Password must be at least 6 characters long" - Weak password

### Network Errors
- "Login failed. Please try again." - Server connection issues
- "Signup failed. Please try again." - Server connection issues

## Styling

The authentication forms feature:
- Modern gradient design
- Responsive layout
- Loading states
- Error message styling
- Hover effects and animations

## Security Considerations

1. **Client-side only**: This is a demo system using localStorage
2. **No encryption**: Passwords are stored in plain text (for demo)
3. **No HTTPS**: Local development only
4. **Production ready**: Would need server-side validation and encryption

## Future Enhancements

1. **Password Reset**: Email-based password recovery
2. **Email Verification**: Account activation via email
3. **Social Login**: Google, Facebook integration
4. **Two-Factor Authentication**: SMS/email verification
5. **Session Timeout**: Automatic logout after inactivity
6. **Remember Me**: Extended session duration option
