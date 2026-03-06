@echo off
echo ============================================
echo   Starting Local Web Server...
echo ============================================
echo.
echo Opening your portfolio at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

python -m http.server 8000
