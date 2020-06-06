import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Avatar} from '_atoms';
import {notifDarkBttnImg, notificationImg, createPostBttnImg} from '_assets';

const Header = ({navigation, headerStyle, text, accentText, writePost}) => {
  let headerText, writePostIcon;
  let notifIcon = notifDarkBttnImg;
  if (headerStyle === 'dark') {
    headerText = (
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>{text + ' '}</Text>
        <Text style={styles.accentText}>{accentText}</Text>
      </View>
    );
    notifIcon = notificationImg;
  }
  if (writePost === true) {
    writePostIcon = (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WritePost');
        }}
        style={styles.postIconStyle}>
        <Image source={createPostBttnImg} style={styles.normalIcon} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Avatar />
      </TouchableOpacity>
      {headerText}
      <View style={styles.rightIcons}>
        {writePostIcon}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          <Image source={notifIcon} style={styles.smallIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
