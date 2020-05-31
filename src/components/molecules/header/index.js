import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Avatar} from '_atoms';
import {bellDarkImg} from '_assets';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Avatar />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications');
        }}>
        <Image source={bellDarkImg} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
