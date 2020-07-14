import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import {Avatar} from '_atoms';
import {notifDarkBttnImg, notificationImg, createPostBttnImg} from '_assets';
import {Icons, Typography, Colors} from '_styles';

/**
 * Create the header at the top of each screen.
 * @param {string} backgroundColor - background color for the header. Usually Colors.white
 * @param {Component} text - centered text in the middle of the header
 * @param {boolean} writePost - is there a second icon on the right?
 * @param {Object} leftIcon - image for the left icon
 * @param {Function} onPressLeftIcon - anonymous function that executes when left icon is pressed
 * @param {Object} rightIcon - image for the right icon
 * @param {Function} onPressRightIcon - anonymous function that executes when right icon is pressed
 * @param {Component} onPressRightIconAlt - display this component instead of the usual right icon
 */

const Header = ({
  navigation,
  backgroundColor,
  text,
  writePost,
  leftIcon,
  onPressLeftIcon,
  rightIcon,
  onPressRightIcon,
  onPressRightIconAlt,
}) => {
  let headerText, writePostIcon;
  if (backgroundColor === Colors.aquarius) {
    StatusBar.setBarStyle('light-content', true);
  } else {
    StatusBar.setBarStyle('dark-content', true);
  }
  if (writePost === true) {
    // writePostIcon = (
    //   <TouchableOpacity
    //     onPress={() => {
    //       navigation.navigate('WritePost');
    //     }}
    //     style={styles.postIconStyle}>
    //     <Image source={createPostBttnImg} style={styles.normalIcon} />
    //   </TouchableOpacity>
    // );
  }

  return (
    <View style={{...styles.headerView, backgroundColor: backgroundColor}}>
      <TouchableOpacity onPress={onPressLeftIcon}>
        <Image source={leftIcon} style={Icons.normal} />
      </TouchableOpacity>
      {text}
      <View style={styles.rightIcons}>
        {writePostIcon}
        {onPressRightIconAlt !== undefined ? (
          onPressRightIconAlt
        ) : (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image source={rightIcon} style={Icons.normal} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
