import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './app-navigator';

const Stack = createStackNavigator();

const Navigator = () => (
    <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName='Home'
    >
        <Stack.Screen name="Home" component={AppNavigator}/>
    </Stack.Navigator>
)

export default Navigator;