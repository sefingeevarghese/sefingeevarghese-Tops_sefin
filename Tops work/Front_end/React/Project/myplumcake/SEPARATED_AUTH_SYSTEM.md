# Separated Authentication System

## Overview
The Plum Cake Bliss application now has completely separate Login and Signup pages for better user experience and cleaner code organization.

## New Structure

### 1. Separate Components
- **`src/Components/Login.jsx`** - Dedicated login page
- **`src/Components/Signup.jsx`** - Dedicated signup page
- **`src/Components/LoginSignup.css`** - Shared styling for both pages

### 2. Updated Routes
- **`/login`** - Login page
- **`/signup`** - Signup page

## Login Page Features

### UI Elements
- Clean, focused login form
- Email and password fields only
- Demo credentials display
- Link to signup page
- Loading states and error handling

### Functionality
- **Admin Login**: Special admin credentials (admin@gmail.com / 123456)
- **User Login**: Regular user authentication from JSON server
- **Account Status Check**: Blocks disabled accounts
- **Auto-redirect**: Logged-in users redirected to home
- **Session Management**: Stores user data in localStorage

### Validation
- Email format validation
- Required field validation
- Account status verification
- Error message display

## Signup Page Features

### UI Elements
- Complete registration form
- All required fields with labels
- Password confirmation
- Mobile number validation
- Link back to login page

### Functionality
- **Email Uniqueness**: Prevents duplicate registrations
- **Form Validation**: Comprehensive input validation
- **Auto-redirect**: Successfully registered users redirected to login
- **Form Reset**: Clears form after successful registration

### Validation Rules
- **Name**: Minimum 2 characters
- **Email**: Valid format + uniqueness check
- **Password**: Minimum 6 characters
- **Confirm Password**: Must match password
- **Mobile**: 10 digits only

## Navigation Flow

### For New Users
1. Visit `/signup`
2. Fill out registration form
3. System validates and creates account
4. Redirected to `/login`
5. Login with new credentials
6. Access full website features

### For Existing Users
1. Visit `/login`
2. Enter email and password
3. System validates credentials
4. Redirected to appropriate page (home or admin dashboard)

### For Admin Users
1. Visit `/login`
2. Use admin credentials
3. Access admin dashboard and management features

## Header Navigation

### When Not Logged In
- **Login Button**: Links to `/login`
- **Sign Up Button**: Links to `/signup`

### When Logged In
- **User Menu**: Dropdown with profile, orders, and logout
- **Admin Menu**: Additional admin options for admin users

## API Integration

### Login Endpoints
- `GET /user` - Fetch all users for authentication
- Client-side filtering for email/password match

### Signup Endpoints
- `GET /user` - Check email uniqueness
- `POST /user` - Create new user account

## Error Handling

### Login Errors
- "Invalid email or password"
- "Your account has been blocked"
- "Login failed. Please try again."

### Signup Errors
- "Name Field is required"
- "Name must be at least 2 characters long"
- "Please enter a valid email address"
- "User with this email already exists"
- "Password must be at least 6 characters long"
- "Passwords do not match"
- "Please enter a valid 10-digit mobile number"

## Security Features

### Client-side Security
- Input validation on both forms
- Email uniqueness checking
- Password confirmation
- Account status verification

### Session Management
- localStorage for persistent sessions
- Automatic logout functionality
- Route protection for admin areas

## Styling

### Shared CSS Classes
- `.auth-container` - Main container with gradient
- `.auth-box` - White card with shadow
- `.auth-header` - Header section
- `.auth-form` - Form container
- `.auth-footer` - Footer with links
- `.form-group` - Input group wrapper
- `.form-input` - Styled input fields
- `.submit-btn` - Primary action button
- `.toggle-btn` - Secondary action button
- `.error-message` - Error display

## Demo Credentials

### Admin Access
- **Email**: admin@gmail.com
- **Password**: 123456
- **Access**: Full admin dashboard

### Demo User
- **Email**: demo@gmail.com
- **Password**: 123456
- **Access**: Regular user features

## File Structure

```
src/
├── Components/
│   ├── Login.jsx           # Dedicated login component
│   ├── Signup.jsx          # Dedicated signup component
│   ├── LoginSignup.css     # Shared styling
│   └── Header.jsx          # Navigation with auth state
├── utils/
│   └── auth.js             # Authentication utilities
└── pages/
    ├── website/            # Public website pages
    └── admin/              # Admin-only pages
```

## Benefits of Separation

### 1. Better User Experience
- Clear, focused forms
- No confusion between login and signup
- Streamlined user flow

### 2. Improved Code Organization
- Single responsibility principle
- Easier to maintain and debug
- Cleaner component structure

### 3. Enhanced Security
- Separate validation logic
- Focused error handling
- Better input sanitization

### 4. Easier Testing
- Isolated components
- Specific test cases
- Better error tracking

## Usage Examples

### Creating a New User
```javascript
// 1. Navigate to /signup
// 2. Fill form with valid data
// 3. System validates and creates account
// 4. Redirected to /login
// 5. Login with new credentials
```

### User Login
```javascript
// 1. Navigate to /login
// 2. Enter email and password
// 3. System validates credentials
// 4. Creates session and redirects
```

### Admin Login
```javascript
// 1. Navigate to /login
// 2. Use admin credentials
// 3. Access admin dashboard
```

## Future Enhancements

### Planned Features
1. **Password Reset**: Email-based recovery
2. **Remember Me**: Extended sessions
3. **Social Login**: Google, Facebook integration
4. **Email Verification**: Account activation
5. **Two-Factor Auth**: SMS verification

### Technical Improvements
1. **Server-side Validation**: Backend validation
2. **Password Hashing**: Secure storage
3. **JWT Tokens**: Stateless authentication
4. **Rate Limiting**: Prevent brute force
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

The separated authentication system provides a cleaner, more maintainable codebase with better user experience. Each component has a single responsibility, making the system easier to understand, test, and extend.
