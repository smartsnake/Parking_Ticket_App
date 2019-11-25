# Parking_Ticket_App
CSCE 3513 Group Project
## Resources
* https://facebook.github.io/react-native/docs/getting-started

## Installation

1. First you need to download and install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads)

2. Next clone this repo. 

    ```bash
    git clone https://github.com/smartsnake/Parking_Ticket_App.git
    ```

3. Change directory to the project directory

    ```bash
    cd Parking_Ticket_App
    ```
4. Install dependacies
    ```bash
    npm install #If this doesn't would you may have a problem with you Node installation
    npm install -g expo-cli #Needed for the expo app
    ```

    It is ok if you receive 'warnings' during the installation as long as the dependacies install correctly.

## Running
1. Start react native service

    ```bash
    npm start
    ```

    After it is done you should see a QR code in the terminal/ on a new browser tap.

2. Now on you phone install and open the Expo client app. 
You're going to have to create an account.

3. Open the Camera app on your phone and scan the QR code.
It may take sometime to compile.

4. Enjoy real time app development.

    If a 'Accessing view manager...' error comes up, you may Dismiss this message.

## Structure

The 'App.js' file is the main of this project. Running the 'npm start' indirectly starts 

a modified Node.js server with the expo configs.


The only folders that we need to focus on is the 'navigation' and 'screens' folder.

1. In the 'navigation/' folder
    * AppNavigation.js - Takes the MainTabNavigator.js and makes it into a switch navigator
    (Makes it look and function better)

    * MainTabNavigator.js - This creates the tab navigation buttons at the bottom of the screen,
    it imports all screens options we want to switch to.

2. In the 'screens/' folder
    * HomeScreen.js - The first screen you see when opening the app, Probably should change this
    to a login screen or something.

    * MapScreen.js - Uses the 'react-native-maps' module to access Google Maps and Apple Maps API's. 
    This screen displays a map over the University of Arkansas currently.

    * SettingsScreen.js - This screen was auto generated, should be changed to something useful later.

## Known bugs

1. Date and Time options will not display correctly on IOS 13 if Dark Mode is enable.
    * For now, make sure Dark Mode is disable.        
