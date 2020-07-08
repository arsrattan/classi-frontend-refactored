import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View} from 'react-native';
import {addImg, browseImg, feedIconImg, homeImg} from '_assets';
import styles from './styles';

import {
  BrowseScreen,
  FeedScreen,
  HomeScreen,
  LiveScreen,
  MessagesScreen,
  LoginScreen
} from '_scenes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#F86A6A',
      style: {
        borderRadius: 15,
        shadowColor: '#bfbfbf',
        shadowOpacity: 0.3,
      },
      labelStyle: {fontSize: 12},
    }}
    shifting={false}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <Image source={homeImg} style={styles.iconNormal} />
        ),
      }}
    />
    <Tab.Screen
      name="Browse"
      component={BrowseScreen}
      options={{
        tabBarLabel: 'Browse',
        tabBarIcon: ({color}) => (
          <Image source={browseImg} style={styles.iconNormal} />
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
        tabBarLabel: 'Feed',
        tabBarIcon: ({color}) => (
          <Image source={feedIconImg} style={styles.iconNormal} />
        ),
      }}
    />
    {/* <Tab.Screen name="Messages" component={MessagesScreen} /> */}
  </Tab.Navigator>
);

export default AppNavigator;
