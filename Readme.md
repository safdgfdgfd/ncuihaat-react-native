OMrntemplate
==

Project Description
=
React-native template aims to kick off  any  new  react-native project quickly and using this we aim to maintain consistency of structure of codebase .  We have laid out  every technology below in detail  which is used in creation of this template and their significance  so one can understand it  and start working  with no time .
We have included the best available libraries to construct this template .

![](https://i.imgur.com/oZv90Od.png)

![](https://i.imgur.com/LDRN0Jt.png)

### Prerequisites

Before getting started, ensure you have the following installed:

1.  Node.js and npm (Node Package Manager)
2.  React Native CLI
3.  Xcode (for iOS development) or Android Studio (for Android development)

### Installation

1.  Clone the repository to your local machine using Git:

git clone http://git.orangemantra.org/kumar.ramesh/omrntemplates.git

How to install and run the project
=
**Steps to Run a React Native Project on Android and iOS**

1. Install Node modules:
    - Run the command: `npm install`

2. Install iOS dependencies:
    - Change directory to the "ios" folder using the command: `cd ios`
    - This command opens the ios folder in the terminal because the "Podfile" is present in this directory.

3. Install pods for iOS:
    - Run the command: `pod install`

4. Run the project on Android:
    - Execute the command: `npx react-native run-android`

5. Run the project on iOS:
    - Execute the command: `npx react-native run-ios`

Now, the React Native project should run on both Android and iOS devices or simulators. Make sure you have the necessary tools and setup configured for running the project on the respective platforms.


How To Use The Project
=
**Step 1: Resolve "Reanimated 2 failed to create a worklet" Error**

To resolve the error, you need to install the `react-native-reanimated` package. Open a terminal or command prompt and run the following command in your React Native project directory:

bashCopy code

`yarn add react-native-reanimated`

**Step 2: Clear Gradle Cache**

To clear the Gradle cache, follow these steps:

1.  Open a terminal or command prompt.
2.  Navigate to the "android" folder of your React Native project by running the following command:

bashCopy code

`cd android`

3.  Run the following command to delete the Gradle cache:

bashCopy code

`./gradlew clean`

**Step 3: Delete Derived Data in Xcode**

To delete the derived data in Xcode, follow these steps:

1.  Open Xcode on your Mac.
2.  Go to the "Xcode" menu in the menu bar.
3.  Select "Preferences."
4.  In the Preferences window, click on the "Locations" tab.
5.  Look for the "Derived Data" section and click on the arrow icon to open the folder in Finder.
6.  In the Finder window, delete the contents of the "DerivedData" folder.

After completing these steps, you should have resolved the "Reanimated 2 failed to create a worklet" error, cleared Gradle cache for Android, and deleted derived data for Xcode. You can now continue working on your React Native project without these issues.



Credits
=
Thanks To [Ramesh Kumar](kumar.ramesh@orangemantra.in) [Saurav Singh](singh.saurav@orangemantra.in)
