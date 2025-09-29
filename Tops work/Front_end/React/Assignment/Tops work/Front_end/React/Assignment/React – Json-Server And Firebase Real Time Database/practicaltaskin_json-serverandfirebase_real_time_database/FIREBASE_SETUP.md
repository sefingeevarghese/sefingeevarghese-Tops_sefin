# Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "react-crud-demo")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Google" provider
5. Enable it and configure:
   - Project support email: your email
   - Project public-facing name: your project name
6. Click "Save"

## Step 3: Enable Realtime Database

1. In your Firebase project, go to "Realtime Database" in the left sidebar
2. Click "Create database"
3. Choose a location (pick the closest to your users)
4. Start in test mode (for development)
5. Click "Done"

## Step 4: Get Your Configuration

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "react-crud-app")
6. Copy the configuration object

## Step 5: Update Your Code

Replace the placeholder values in `src/firebase.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  databaseURL: "https://your-project-id-default-rtdb.firebaseio.com"
};
```

## Step 6: Database Rules (Optional)

For production, you should set up proper database rules. In the Realtime Database section:

1. Go to "Rules" tab
2. Replace the default rules with:

```json
{
  "rules": {
    "posts": {
      ".read": true,
      ".write": "auth != null",
      "$postId": {
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() === auth.uid)"
      }
    }
  }
}
```

## Step 7: Test Your Setup

1. Start your React app: `npm start`
2. Navigate to the Firebase CRUD section
3. Try signing in with Google
4. Create, edit, and delete posts

## Troubleshooting

### Common Issues:

1. **"Firebase not configured" error**
   - Make sure you've updated `src/firebase.js` with your actual configuration
   - Check that all values are correct and not placeholder text

2. **Authentication not working**
   - Verify Google Authentication is enabled in Firebase Console
   - Check that your domain is authorized (localhost:3000 should work for development)

3. **Database access denied**
   - Make sure your database rules allow read/write access
   - For development, you can use test mode

4. **CORS errors**
   - Add your domain to authorized domains in Firebase Console
   - For development, localhost should work by default

### Development vs Production:

- **Development**: Use test mode for database rules
- **Production**: Set up proper security rules
- **Domain**: Add your production domain to authorized domains

## Security Notes

- Never commit your Firebase API keys to public repositories
- Use environment variables for production
- Set up proper database rules before going live
- Regularly review your Firebase project settings

## Environment Variables (Recommended for Production)

Create a `.env` file in your project root:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
```

Then update `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};
```

Don't forget to add `.env` to your `.gitignore` file! 