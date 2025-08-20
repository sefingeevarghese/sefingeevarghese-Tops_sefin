# React CRUD Application

A comprehensive React application demonstrating CRUD operations with JSON Server and Firebase, including authentication and error handling.

## Features

### Task 1: JSON Server CRUD Operations
- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ All HTTP methods: GET, POST, PUT, PATCH, DELETE
- ✅ Form validation and error handling
- ✅ Real-time data updates
- ✅ User-friendly interface

### Task 2: Firebase CRUD with Authentication
- ✅ Google Authentication integration
- ✅ Real-time database operations
- ✅ User-specific data management
- ✅ Secure CRUD operations
- ✅ Authentication state management

### Task 3: Public API with Error Handling
- ✅ Fetches data from JSONPlaceholder API
- ✅ Comprehensive error handling
- ✅ Loading states with spinner
- ✅ Search and sort functionality
- ✅ Responsive table design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project (for Task 2)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd practicaltaskin_json-serverandfirebase_real_time_database
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase (for Task 2):
   - Follow the detailed setup guide in `FIREBASE_SETUP.md`
   - Or use the application without Firebase (it will show appropriate error messages)

## Configuration

### Firebase Setup
Update `src/firebase.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com"
};
```

## Running the Application

### Start the React Development Server
```bash
npm start
```
The application will be available at `http://localhost:3000`

### Start JSON Server (for Task 1)
In a separate terminal:
```bash
npm run server
```
JSON Server will run at `http://localhost:3001`

## Project Structure

```
src/
├── components/
│   ├── JsonServerCRUD.js      # Task 1: JSON Server CRUD
│   ├── JsonServerCRUD.css
│   ├── FirebaseCRUD.js        # Task 2: Firebase CRUD
│   ├── FirebaseCRUD.css
│   ├── PublicAPITable.js      # Task 3: Public API Table
│   ├── PublicAPITable.css
│   ├── LoadingSpinner.js      # Loading component
│   └── LoadingSpinner.css
├── firebase.js                # Firebase configuration
├── App.js                     # Main application component
├── App.css                    # Main styles
└── index.js                   # Application entry point

db.json                        # JSON Server database
```

## Usage

### Navigation
The application has three main sections accessible via the navigation bar:

1. **Public API Table** (Home page)
   - Displays users from JSONPlaceholder API
   - Search and sort functionality
   - Error handling and loading states

2. **JSON Server CRUD**
   - Full CRUD operations on local JSON Server
   - Form-based user management
   - Real-time updates

3. **Firebase CRUD**
   - Google Authentication required
   - Real-time database operations
   - User-specific post management

### JSON Server Operations
- **GET**: Fetches all users
- **POST**: Creates new user
- **PUT**: Updates entire user record
- **PATCH**: Partially updates user record
- **DELETE**: Removes user

### Firebase Operations
- **Authentication**: Google Sign-in/Sign-out
- **Create**: Add new posts
- **Read**: View all posts in real-time
- **Update**: Edit your own posts
- **Delete**: Remove your own posts

## API Endpoints

### JSON Server (http://localhost:3001)
- `GET /users` - Get all users
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `PATCH /users/:id` - Partial update
- `DELETE /users/:id` - Delete user

### Public API (JSONPlaceholder)
- `GET https://jsonplaceholder.typicode.com/users` - Get users

## Error Handling

The application includes comprehensive error handling:

- **Network errors**: Displayed with retry options
- **Validation errors**: Form-level validation
- **Authentication errors**: User-friendly messages
- **Loading states**: Spinner animations
- **Empty states**: Helpful messages when no data

## Styling

- Modern, responsive design
- Material Design inspired components
- Mobile-friendly interface
- Consistent color scheme
- Smooth animations and transitions

## Technologies Used

- **React 19.1.1** - Frontend framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Firebase** - Authentication and real-time database
- **JSON Server** - Mock REST API
- **CSS3** - Styling and animations

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### Common Issues

1. **JSON Server not starting**
   - Ensure port 3001 is available
   - Check if `db.json` exists in the root directory

2. **Firebase authentication not working**
   - Verify Firebase configuration in `src/firebase.js`
   - Ensure Google Authentication is enabled in Firebase Console
   - Check browser console for errors

3. **CORS issues**
   - JSON Server should be running on port 3001
   - React app should be on port 3000

4. **Loading spinner not showing**
   - Check if all CSS files are properly imported
   - Verify component imports

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
