@echo off
rem ===========================================================
rem HP Sample Studio launcher
rem Next.js production server (port 8410) + Chrome app-mode window
rem On first run it performs npm install / npm run build.
rem NOTE: keep this file ASCII-only. cmd.exe mis-parses UTF-8
rem       Japanese text and silently breaks the following lines.
rem ===========================================================
setlocal

set "PORT=8410"
for %%I in ("%~dp0..") do set "APPROOT=%%~fI"

cd /d "%APPROOT%"

rem --- reuse the server if it is already running -------------
set "RUNNING="
for /f "delims=" %%R in ('powershell -NoProfile -Command "try { $c = New-Object Net.Sockets.TcpClient; $c.Connect('127.0.0.1', %PORT%); $c.Close(); 'yes' } catch { 'no' }"') do set "RUNNING=%%R"

if /I "%RUNNING%"=="yes" goto :openbrowser

rem --- dependencies ------------------------------------------
if not exist "%APPROOT%\node_modules" (
  echo [HP Sample Studio] First-time setup. This may take a few minutes...
  call npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

rem --- production build --------------------------------------
if not exist "%APPROOT%\.next\BUILD_ID" (
  echo [HP Sample Studio] Building... first build takes 1-2 minutes.
  call npm run build
  if errorlevel 1 (
    echo [ERROR] build failed.
    pause
    exit /b 1
  )
)

rem --- start server in a minimized window ---------------------
echo [HP Sample Studio] Starting server on port %PORT%...
start "HP Sample Studio Server" /min cmd /c "npm run start -- -p %PORT%"

rem --- wait for the server (up to 60s) ------------------------
powershell -NoProfile -Command "$deadline=(Get-Date).AddSeconds(60); while((Get-Date) -lt $deadline){ try { $c=New-Object Net.Sockets.TcpClient; $c.Connect('127.0.0.1',%PORT%); $c.Close(); exit 0 } catch { Start-Sleep -Milliseconds 400 } }; exit 1"
if errorlevel 1 (
  echo [ERROR] server did not start in time.
  pause
  exit /b 1
)

:openbrowser
set "APPURL=http://localhost:%PORT%/"

set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%LocalAppData%\Google\Chrome\Application\chrome.exe"

set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE%" set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"

if exist "%CHROME%" (
  start "" "%CHROME%" --app="%APPURL%" --window-size=1280,900
) else if exist "%EDGE%" (
  start "" "%EDGE%" --app="%APPURL%" --window-size=1280,900
) else (
  start "" "%APPURL%"
)

endlocal
