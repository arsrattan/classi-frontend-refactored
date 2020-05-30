import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Avatar } from '_atoms';
import { fontFamily, notificationImg } from '_assets';

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Avatar />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{ color: '#fff', fontSize: 15, fontFamily: fontFamily.book }}
        >
          Welcome Back,
        </Text>
        <Text
          style={{
            color: '#9F6249',
            fontSize: 15,
            fontFamily: fontFamily.book,
          }}
        >
          {' '}
          Bella
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications')
        }}
      >
        <Image source={notificationImg} width={20} height={20} />
      </TouchableOpacity>
    </View>
  )
};

export default HomeHeader;