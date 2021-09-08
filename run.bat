if "%1"=="m" (npx react-native start) else (npx react-native run-android && adb reverse tcp:8080 tcp:8080)
