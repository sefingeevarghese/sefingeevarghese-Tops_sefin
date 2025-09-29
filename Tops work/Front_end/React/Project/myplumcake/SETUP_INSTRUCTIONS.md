# Plum Cake Bliss - Setup Instructions

## Problem Solved
The 401 (Unauthorized) errors were caused by the React app trying to fetch data from Firebase URLs that require authentication. The solution was to switch to using a local JSON server.

## Quick Start

### Option 1: Use the batch file (Recommended)
1. Double-click `start-servers.bat`
2. This will automatically start both servers

### Option 2: Manual start
1. Start JSON Server:
   ```bash
   npx json-server --watch db.json --port 3001
   ```

2. In a new terminal, start React App:
   ```bash
   npm start
   ```

## Server URLs
- **React App**: http://localhost:3000
- **JSON Server**: http://localhost:3001

## API Endpoints
The following endpoints are now available:
- `/categories` - Get all categories
- `/products` - Get all products  
- `/testimonials` - Get all testimonials
- `/team` - Get team members
- `/user` - Get users
- `/admin` - Get admin users
- `/contact` - Get contact messages
- `/orders` - Get orders

## Changes Made
1. Updated API calls in website pages to use local JSON server
2. Removed Firebase URLs and replaced with local endpoints
3. Added error handling for API calls
4. Created batch file for easy server management

## Troubleshooting
- If you get 401 errors, make sure the JSON server is running on port 3001
- If React app doesn't load data, check that both servers are running
- Make sure no other applications are using ports 3000 or 3001
