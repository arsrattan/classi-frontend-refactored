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
  LoginScreen,
  EmailLoginScreen,
  ProfileScreen,
  EditProfileScreen,
  InviteScreen,
  GroupsHomeScreen,
  GroupDetailsScreen,
  CreateGroupScreen,
  GroupMembersScreen,
  WritePostScreen,
  FeedScreen,
} from '_scenes';

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false, gestureEnabled: false}}
    initialRouteName="Login">
    <Stack.Screen name="Home" component={AppNavigator} />
    <Stack.Screen name="Class" component={ClassScreen} />
    <Stack.Screen name="Registered" component={RegisteredScreen} />
    <Stack.Screen name="Completed" component={CompletedScreen} />
    <Stack.Screen name="CreateClass" component={CreateClassScreen} />
    <Stack.Screen name="PublishedClass" component={PublishedClassScreen} />
    <Stack.Screen name="AllComments" component={AllCommentsScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="EmailLogin" component={EmailLoginScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="InviteScreen" component={InviteScreen} />
    <Stack.Screen name="GroupsScreen" component={GroupsHomeScreen} />
    <Stack.Screen name="GroupDetailsScreen" component={GroupDetailsScreen} />
    <Stack.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
    <Stack.Screen name="GroupMembersScreen" component={GroupMembersScreen} />
    <Stack.Screen name="WritePostScreen" component={WritePostScreen} />
    <Stack.Screen name="FeedScreen" component={FeedScreen} />
  </Stack.Navigator>
);

export default Navigator;
export {default as AppNavigator} from './app-navigator';
export {default as ClassNavigator} from './class-navigator';
export {default as LoginNavigator} from './login-navigator';
