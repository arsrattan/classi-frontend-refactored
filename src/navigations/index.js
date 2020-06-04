import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './app-navigator';
import {
  ClassScreen,
  RegisteredScreen,
  CompletedScreen,
  CreateClassScreen,
  PublishedClassScreen,
  AllCommentsScreen,
  NotificationsScreen,
} from '_scenes';

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false, gestureEnabled: false}}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={AppNavigator} />
    <Stack.Screen name="Class" component={ClassScreen} />
    <Stack.Screen name="Registered" component={RegisteredScreen} />
    <Stack.Screen name="Completed" component={CompletedScreen} />
    <Stack.Screen name="CreateClass" component={CreateClassScreen} />
    <Stack.Screen name="PublishedClass" component={PublishedClassScreen} />
    <Stack.Screen name="AllComments" component={AllCommentsScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
  </Stack.Navigator>
);

export default Navigator;
export {default as AppNavigator} from './app-navigator';
export {default as ClassNavigator} from './class-navigator';
