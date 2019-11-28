import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import InportForm from '../screens/form2';

//sets configurations for cross-platform app
const config = Platform.select({
  web: { headerMode: 'screen' },
  ios: { headerMode: 'float' },
  default: {},
});

//A Stack Navigator that creates the "home" tab in the tab bar
//Create stack navigator, function that returns a react component
const HomeStack = createStackNavigator(
  {
    //Home property with the type class "HomeScreen" from HomeScreen.js
    Home: HomeScreen,
  },
  config
);

//Navigator properties
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

//A Stack Navigator that creates the "Map" tab in the tab bar
const LinksStack = createStackNavigator(
  {
    //Gives the stack a property named Links which is a MapScreen
    Links: MapScreen,
  },
  config
);


LinksStack.navigationOptions = {
  tabBarLabel: 'Maps',
  tabBarIcon: ({ focused }) => (
    //if the platform is iOS, name is 'ios-map', else its 'md-map'
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


//tabNavigator is created with 3 tabs representing home, map, and settings page
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
