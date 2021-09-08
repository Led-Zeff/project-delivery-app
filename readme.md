### Launch this app
 - Start metro `npx react-native start`
 - Start the app `npx react-native run-android`
 - Forward port 8080 to the PC `adb reverse tcp:8080 tcp:8080`

## Or
  - Start metro `./rum m`
  - Start the app and redirect TCP:8080 at once `./run`

### Clean android
Execute `./android/gradlew clean`