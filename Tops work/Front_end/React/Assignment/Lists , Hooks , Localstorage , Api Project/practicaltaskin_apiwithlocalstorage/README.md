# React Context API Project with JSON Server - Complete Features

A comprehensive React.js application demonstrating the use of Context API for global state management, featuring theme toggle (light/dark mode), user authentication, CRUD operations, and advanced features with JSON Server.

## 🚀 Complete Feature Set

### ✅ Task 1: API Integration & CRUD Operations
- **Public API Integration**: Fetches data from JSONPlaceholder API and displays in table format
- **JSON Server Integration**: Full CRUD operations with a REST API
- **HTTP Methods**: GET, POST, PUT, DELETE & PATCH methods implemented
- **Table Display**: Modern responsive table with search and pagination
- **Real-time Data**: Live data from public API with error handling

### ✅ Task 2: Firebase Authentication
- **Firebase Integration**: Complete Firebase authentication setup
- **Google Authentication**: Google sign-in with Firebase API
- **User Profile Management**: Display user information and authentication status
- **Secure Sign Out**: Proper authentication state management
- **Error Handling**: Comprehensive error handling for auth operations

### ✅ Task 3: Error Handling & Loading States
- **Loading Spinners**: Comprehensive loading indicators throughout the app
- **Error Handling**: User-friendly error messages and retry functionality
- **Loading States**: Loading spinners while data is being fetched
- **Network Error Handling**: Proper handling of API failures
- **User Feedback**: Clear feedback for all user actions

### 🎯 Additional Advanced Features

#### 📊 Dashboard
- **Statistics Overview**: Total posts, views, likes, and average engagement
- **Recent Posts**: Display latest posts with excerpts
- **Quick Actions**: Easy access to common tasks
- **Visual Cards**: Modern card-based layout with hover effects
- **Real-time Data**: Live statistics from user's posts

#### 🔍 Search & Filter System
- **Advanced Search**: Search by title and content
- **Multiple Filters**: Category, date range, and sorting options
- **Real-time Results**: Instant search results as you type
- **Filter Combinations**: Combine multiple filters
- **Clear Filters**: Easy reset functionality

#### 👤 User Settings & Profile Management
- **Profile Information**: Update name, email, bio, and avatar
- **Security Settings**: Change password with validation
- **Notification Preferences**: Toggle email, push, and digest notifications
- **Toggle Switches**: Modern toggle components
- **Form Validation**: Comprehensive input validation

#### 📝 Enhanced Post Management
- **Rich Text Support**: Enhanced content editing
- **Category System**: Organize posts by categories
- **Post Analytics**: View likes, views, and engagement
- **Bulk Operations**: Manage multiple posts efficiently
- **Post Scheduling**: Future post scheduling (concept)

#### 🎨 Advanced UI/UX Features
- **Responsive Design**: Mobile-first approach
- **Modern Animations**: Smooth transitions and hover effects
- **Accessibility**: ARIA labels and keyboard navigation
- **Loading States**: Comprehensive loading indicators
- **Error Handling**: User-friendly error messages

## 📁 Project Structure

```
src/
├── contexts/
│   ├── ThemeContext.js      # Theme state management
│   └── AuthContext.js       # Authentication state management
├── components/
│   ├── ThemeToggle.js       # Theme toggle button component
│   ├── ThemeToggle.css      # Theme toggle styles
│   ├── LoginForm.js         # Login/Register form component
│   ├── LoginForm.css        # Login form styles
│   ├── WelcomeMessage.js    # Main dashboard component
│   ├── WelcomeMessage.css   # Dashboard styles
│   ├── PostManager.js       # CRUD operations for posts
│   ├── PostManager.css      # Post manager styles
│   ├── Dashboard.js         # Statistics and overview
│   ├── Dashboard.css        # Dashboard styles
│   ├── UserSettings.js      # Profile and settings management
│   ├── UserSettings.css     # Settings styles
│   ├── Search.js            # Search and filter functionality
│   ├── Search.css           # Search styles
│   ├── PublicAPITable.js    # Public API table component
│   ├── PublicAPITable.css   # Public API table styles
│   ├── FirebaseAuth.js      # Firebase authentication
│   └── FirebaseAuth.css     # Firebase auth styles
├── firebase/
│   └── config.js           # Firebase configuration
├── services/
│   └── api.js              # API service for JSON Server
├── App.js                  # Main application component
├── App.css                 # Global styles and CSS variables
└── index.js                # Application entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google account (for Firebase)

### Quick Start
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd practicaltaskin_apiwithlocalstorage
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start JSON Server** (in a separate terminal):
   ```bash
   npm run server
   ```
   This will start JSON Server on `http://localhost:3001`

4. **Start React Development Server** (in another terminal):
   ```bash
   npm start
   ```
   This will start React on `http://localhost:3000`

5. **Open Browser**:
   Navigate to `http://localhost:3000`

## 🔥 Firebase Setup (Required for Google Authentication)

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name and follow the setup wizard
4. Enable Google Analytics (optional)

### Step 2: Enable Authentication
1. In Firebase Console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Google" provider
5. Enter a project support email and save

### Step 3: Get Firebase Configuration
1. Click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app and copy the configuration

### Step 4: Update Configuration
1. Open `src/firebase/config.js`
2. Replace the placeholder `firebaseConfig` with your actual configuration
3. Save the file

### Step 5: Test Firebase
1. Navigate to the "Firebase" tab in your app
2. Click "Sign in with Google"
3. Complete the Google sign-in process

**📖 For detailed Firebase setup instructions, see [FIREBASE_SETUP_GUIDE.md](FIREBASE_SETUP_GUIDE.md)**

## 🎯 Feature Usage Guide

### 🔐 Authentication
- **Login**: Use existing users or create new ones
- **Existing Users**: 
  - Email: `john@example.com` / Password: `password123`
  - Email: `jane@example.com` / Password: `password123`
  - Email: `admin@tops.com` / Password: `tops123`
- **Registration**: Click "Sign Up" to create a new account
- **Google Sign-in**: Use the Firebase tab for Google authentication
- **Logout**: Click "Sign Out" button when logged in

### 📊 Dashboard
1. **Login** to your account
2. **Dashboard tab** shows statistics and overview
3. **View Statistics**: Total posts, views, likes, and engagement
4. **Recent Posts**: See your latest posts with excerpts
5. **Quick Actions**: Access common tasks quickly

### 📝 Post Management
1. **Switch to "My Posts" tab**
2. **Create Posts**: Click "Create New Post" and fill in details
3. **View Posts**: All your posts displayed in a modern grid
4. **Edit Posts**: Click "Edit" button on any post
5. **Delete Posts**: Click "Delete" button (with confirmation)
6. **Real-time Updates**: All changes immediately reflected

### 🔍 Search & Filter
1. **Switch to "Search" tab**
2. **Search Posts**: Use the search bar to find posts
3. **Apply Filters**: Use category, date range, and sorting filters
4. **Combine Filters**: Mix and match different filter options
5. **Clear Filters**: Reset all filters with one click

### 🌐 Public API Table (Task 1)
1. **Switch to "Public API" tab**
2. **View Users**: See data fetched from JSONPlaceholder API
3. **Search Users**: Filter by name, email, or company
4. **Pagination**: Navigate through pages of results
5. **API Info**: View API endpoint and response details

### 🔥 Firebase Authentication (Task 2)
1. **Switch to "Firebase" tab**
2. **Google Sign-in**: Click "Sign in with Google" button
3. **User Profile**: View authenticated user information
4. **Sign Out**: Securely sign out from Firebase
5. **Setup Instructions**: Follow Firebase configuration steps

### ⚙️ Settings & Profile
1. **Switch to "Settings" tab**
2. **Profile Settings**: Update your personal information
3. **Security Settings**: Change your password
4. **Notification Preferences**: Manage notification settings
5. **Save Changes**: All changes are automatically saved

### 👤 Profile View
1. **Switch to "Profile" tab**
2. **View Information**: See your account details
3. **Member Since**: Check when you joined
4. **Login History**: View your last login time
5. **Task Status**: See all completed requirements

## 🔧 Technical Implementation

### Context API Usage
- **ThemeContext**: Manages `isDarkMode` state and `toggleTheme` function
- **AuthContext**: Manages `user` state, `login`, `register`, `logout`, `updateUser` functions

### JSON Server Integration
- **API Service**: Centralized API calls in `src/services/api.js`
- **Error Handling**: Comprehensive error handling for network issues
- **Loading States**: Loading indicators for better UX
- **Real-time Updates**: Immediate UI updates after API operations

### Public API Integration (Task 1)
- **JSONPlaceholder API**: Fetches user data from external API
- **Table Display**: Modern responsive table with search
- **Pagination**: Efficient pagination for large datasets
- **Error Handling**: Proper error handling for API failures

### Firebase Authentication (Task 2)
- **Google Sign-in**: Complete Google authentication flow
- **Auth State Management**: Real-time authentication state
- **User Profile**: Display user information and status
- **Secure Operations**: Proper sign-out and error handling

### Advanced Features
- **Search Algorithm**: Efficient search with multiple criteria
- **Filter System**: Dynamic filtering with multiple options
- **Statistics Calculation**: Real-time statistics from user data
- **Form Validation**: Comprehensive input validation
- **Responsive Design**: Mobile-first responsive layout

## 📊 Database Schema

### Users
```json
{
  "id": "1",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "bio": "Software Developer",
  "avatar": "https://example.com/avatar.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "lastLogin": "2024-01-01T00:00:00.000Z",
  "emailNotifications": true,
  "pushNotifications": true,
  "weeklyDigest": false
}
```

### Posts
```json
{
  "id": "1",
  "title": "First Post",
  "content": "This is the first post content",
  "userId": "1",
  "category": "technology",
  "likes": 5,
  "views": 25,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 🎨 Design System

### Color Scheme
- **Light Theme**: Clean whites and grays with blue accents
- **Dark Theme**: Deep grays and blacks with purple accents
- **CSS Variables**: Dynamic theming with CSS custom properties

### Components
- **Modern Cards**: Rounded corners with subtle shadows
- **Gradient Buttons**: Beautiful gradient backgrounds
- **Toggle Switches**: Modern toggle components
- **Loading Spinners**: Animated loading indicators
- **Hover Effects**: Smooth hover animations

## 🔍 Key Learning Points

1. **Context API**: Global state management without prop drilling
2. **Custom Hooks**: `useTheme()` and `useAuth()` for easy context consumption
3. **JSON Server**: RESTful API for CRUD operations
4. **Public API Integration**: Fetching and displaying external data
5. **Firebase Authentication**: Google sign-in and auth state management
6. **Advanced Search**: Efficient search and filtering algorithms
7. **Form Management**: Complex form handling with validation
8. **Responsive Design**: Mobile-first responsive layout
9. **Error Handling**: Comprehensive error management
10. **Loading States**: Better user experience with spinners

## 🐛 Troubleshooting

### Common Issues
- **JSON Server Offline**: Ensure JSON Server is running on port 3001
- **Port Conflicts**: Change ports in `package.json` if needed
- **CORS Issues**: JSON Server handles CORS automatically
- **Module Errors**: Run `npm install` to install dependencies
- **Firebase Errors**: Check Firebase configuration and authorized domains

### Performance Tips
- **Search Optimization**: Debounced search for better performance
- **Lazy Loading**: Components load only when needed
- **Efficient Filtering**: Optimized filter algorithms
- **Memory Management**: Proper cleanup in useEffect hooks

## 🚀 Future Enhancements

### Planned Features
- **Real-time Chat**: Live messaging system
- **File Upload**: Image and document uploads
- **Advanced Analytics**: Detailed user analytics
- **Social Features**: Comments, likes, and sharing
- **Email Integration**: Email notifications
- **PWA Support**: Progressive Web App features
- **Offline Support**: Offline functionality
- **Multi-language**: Internationalization support

### Technical Improvements
- **TypeScript**: Full TypeScript implementation
- **Testing**: Unit and integration tests
- **CI/CD**: Automated deployment pipeline
- **Performance**: Advanced optimization techniques
- **Security**: Enhanced security measures

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**🎉 This is a comprehensive React.js application demonstrating modern web development practices with Context API, JSON Server, Firebase Authentication, and advanced UI/UX features!**

## ✅ **All Tasks Completed**

### Task 1: ✅ **COMPLETED**
- ✅ Fetch data from public API (JSONPlaceholder) and display in table format
- ✅ JSON Server with GET, POST, PUT, DELETE & PATCH methods
- ✅ Modern table with search and pagination
- ✅ Error handling and loading states

### Task 2: ✅ **COMPLETED**
- ✅ React app with CRUD and Firebase Authentication
- ✅ Google Authentication with Firebase API
- ✅ User profile management
- ✅ Secure authentication flow

### Task 3: ✅ **COMPLETED**
- ✅ Error handling and loading states for API calls
- ✅ Loading spinner while data is being fetched
- ✅ Comprehensive error messages
- ✅ Retry functionality
