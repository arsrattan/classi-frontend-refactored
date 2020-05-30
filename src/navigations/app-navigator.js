import React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, BrowseScreen, LiveScreen, FeedScreen, MessagesScreen } from '_scenes';
import { homeImg } from '_assets';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: '#F86A6A',
        style: {
          borderRadius: 15,
          shadowColor: '#bfbfbf',
          shadowOpacity: 0.3,
        },
        labelStyle: { fontSize: 12 },
      }}
      shifting={false}
      initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Image source={homeImg} />,
        }}/>
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Live" component={LiveScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
)

export default AppNavigator;