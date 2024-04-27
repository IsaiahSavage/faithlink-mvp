# FaithLink: Spiritual Life App

Repository for the FaithLink MVP. This app is designed to help Christian small groups and their members grow in their faith by providing a platform for sharing resources, organizing meetings, and tracking spiritual growth.

Built with React Native + Expo.

Here are a few screenshots from the app on iOS:

![Screenshots](/docs/screenshots/screenpreviews.png)

# Installation Instructions

## Android

Coming Soon. In the meantime, you can run the app on your Android device using the Expo Go app. Follow the instructions in the Development Setup section below.

## iOS

Coming Soon. In the meantime, you can run the app on your iOS device using the Expo Go app. Follow the instructions in the Development Setup section below.

## Web

Coming Soon.

# Development Setup

## Required Software

- Node.js (we recommend using the latest LTS version)
- npm (should come with Node.js)
- Expo CLI (install with `npm install -g expo-cli`)
- Expo Go app (available on the App Store and Google Play)

## Steps

1. Clone the repository
2. Run `npm install` in the root directory of the project
3. Run `npx expo start` to start the development server
4. Open the Expo Go app on your phone and scan the QR code that appears in the terminal
5. The app should open on your phone

## Changing Firestore DBs

The app is currently configured to connect to a test Firestore DB. If you are looking to set up a new connection to a different Firestore DB, you'll need to edit the configuration found in `firebase/firestoreConfig.js`. For more information, see the official [Firebase documentation](https://firebase.google.com/docs/firestore/quickstart). 

## A Note on Building for iOS

In order to build for iOS, you will need to have a Mac with Xcode installed. You will also need to have an Apple Developer account. You can follow the instructions on the [Expo documentation](https://docs.expo.dev/distribution/building-standalone-apps/) to build a standalone app for iOS.

## A Note on Web

Do not run `npm start` to run the app in a web browser. The app is not currently set up to run in a web browser. We are working on adding web support.

## Testing

We are using Jest for testing. To run the tests, run `npm test` in the root directory of the project.

# Contributors

- [Isaiah Savage](https://github.com/IsaiahSavage/)

  - Senior Computer Science Major at Mount Vernon Nazarene University
  - Lead Developer, Designer, UI/UX Designer
  - Connect with me on [LinkedIn](https://www.linkedin.com/in/isaiahsavage/)

- [Gina Lawhon](https://github.com/HyperbolicInt/)

  - Junior Computer Science Major at Mount Vernon Nazarene University
  - Project Manager
  - Role: Coordinating everyone's assignments, providing status updates to the professor, taking the lead on interacting with the customer, keeping track of time spent on the project by team members, editing documentation

- [Piersen Schuiling](https://github.com/PiersenS/)

  - Junior Computer Science Major at Mount Vernon Nazarene University
  - Requirements Lead
  - Role: Secondary support for technical work and system integration
