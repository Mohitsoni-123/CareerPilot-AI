@echo off
echo ========================================================
echo   Launching CareerPilot-AI (Backend + Frontend)
echo ========================================================
echo.

echo Starting Backend Server on http://localhost:5000...
start "CareerPilot-AI Backend" cmd /k "cd server && npm run dev"

timeout /t 3 /nobreak >nul

echo Starting Frontend Vite Client on http://localhost:5173...
start "CareerPilot-AI Frontend" cmd /k "cd client && npm run dev"

echo.
echo Both services launched!
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo ========================================================
pause

