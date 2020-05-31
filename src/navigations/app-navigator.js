import React from 'react';
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, BrowseScreen, LiveScreen, FeedScreen, MessagesScreen } from '_scenes';
import { homeImg, browseImg, addImg, feedIconImg } from '_assets';

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
    }} />
    <Tab.Screen name='Browse' component={BrowseScreen} options={{
      tabBarLabel: 'Browse',
      tabBarIcon: ({ color }) => <Image source={browseImg} />,
    }} />
    <Tab.Screen name='Live' component={LiveScreen} options={{
      tabBarLabel: '',
      tabBarIcon: ({ color }) => (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            shadowColor: 'red',
            shadowOpacity: 0.2,
            shadowOffset: { height: 8, width: 0 },
          }}
        >
          <Image source={addImg} />
        </View>
      ),
    }} />
    <Tab.Screen name="Feed" component={FeedScreen} options={{
      tabBarLabel: 'Feed',
      tabBarIcon: ({ color }) => <Image source={feedIconImg} />,
    }} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
  </Tab.Navigator>
)

export default AppNavigator;