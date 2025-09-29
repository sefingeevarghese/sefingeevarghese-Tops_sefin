@echo off
echo Starting Plum Cake Bliss Application...
echo.
echo Starting JSON Server on port 3001...
start "JSON Server" cmd /k "npx json-server --watch db.json --port 3001"
echo.
echo Starting React App on port 3000...
start "React App" cmd /k "npm start"
echo.
echo Both servers are starting...
echo - React App: http://localhost:3000
echo - JSON Server: http://localhost:3001
echo.
pause
