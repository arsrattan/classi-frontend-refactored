import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View, Text } from 'react-native';
import {
  addImg,
  browseImg,
  feedIconImg,
  homeImg,
  groupsImg,
  homeActiveImg,
  browseActiveImg,
  feedActiveImg,
  groupsActiveImg,
} from '_assets';
import styles from './styles';

import {
  BrowseScreen,
  FeedScreen,
  HomeScreen,
  LiveScreen,
  MessagesScreen,
  GroupsHomeScreen,
  LoginScreen,
} from '_scenes';
import { Colors, Typography, Spacing, Icons } from '_styles';

const activeText = {
  ...Typography.p2,
  ...Typography.bold,
  color: Colors.aries,
  paddingTop: Spacing.smallest,
};

const inactiveText = {
  ...Typography.p2,
  color: Colors.cancer,
  paddingTop: Spacing.smallest,
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.aries,
      inactiveTintColor: Colors.cancer,
      style: {
        borderRadius: 25,
        paddingTop: Spacing.smaller,
      },
      labelStyle: { ...Typography.p2 },
    }}
    shifting={false}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: ({ focused, tintColor }) => (
          <Text style={focused ? activeText : inactiveText}>Home</Text>
        ),
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={focused ? homeActiveImg : homeImg}
            style={Icons.normal}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Browse"
      component={BrowseScreen}
      options={{
        tabBarLabel: ({ focused, tintColor }) => (
          <Text style={focused ? activeText : inactiveText}>Browse</Text>
        ),
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={focused ? browseActiveImg : browseImg}
            style={Icons.normal}
          />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Live"
      component={LiveScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              shadowColor: 'red',
              shadowOpacity: 0.2,
              shadowOffset: {height: 8, width: 0},
            }}>
            <Image source={addImg} style={styles.iconNormal} />
          </View>
        ),
      }}
    /> */}
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarLabel: ({ focused, tintColor }) => (
          <Text style={focused ? activeText : inactiveText}>Social</Text>
        ),
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={focused ? feedActiveImg : feedIconImg}
            style={Icons.normal}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Groups"
      component={GroupsHomeScreen}
      options={{
        tabBarLabel: ({ focused, tintColor }) => (
          <Text style={focused ? activeText : inactiveText}>Groups</Text>
        ),
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={focused ? groupsActiveImg : groupsImg}
            style={Icons.normal}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
