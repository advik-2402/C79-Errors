import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/donate';
import RequestScreen from '../screens/bookRequest';

export const AppNavigator = createBottomTabNavigator({
    Donate_Books: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/11861-santa-claus-on-the-chimney.json")} />,
            tabBarLevel: "Donate Books",
        }
    },
    Request_Books: {
        screen: RequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/11861-santa-claus-on-the-chimney.json")} />,
            tabBarLevel: "Donate Books",
        }
    }
})
