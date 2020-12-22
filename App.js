import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/welcome';
import { AppNavigator } from './components/appTabNavigate';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  Welcome_Screen: {screen: Welcome},
  Bottom_Navigate: {screen: AppNavigator},
})

const AppContainer = createAppContainer(switchNavigator);
