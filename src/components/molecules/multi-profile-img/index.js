import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Typography, Colors, Spacing } from '_styles';
import styles from './styles';
import { ProfileImg } from '_atoms';

const MultiProfileImg = ({ userList, propStyles }) => {
  const numUsers = userList.length;
  const profileImgList = [];
  const userNamesList = [];
  if (numUsers <= 3) {
    var i;
    for (i = 0; i < numUsers; i++) {
      const userID = userList[i];
      profileImgList.push(
        <ProfileImg
          size="small"
          userProfileImg="https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png"
          style={{ left: -15 * i, borderWidth: 3, borderColor: 'white' }}
        />,
      );
      if (i !== numUsers - 1) {
        userNamesList.push(userID + ', ');
      } else {
        userNamesList.push(userID);
      }
    }
    profileImgList.push(
      <Text style={{ ...styles.userNameText, left: -15 * (i - 1) }}>
        {userNamesList}
      </Text>,
    );
  } else {
    var i;
    for (i = 0; i < 3; i++) {
      const userID = userList[i];
      profileImgList.push(
        <ProfileImg
          size="small"
          userProfileImg="https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png"
          style={{ left: -15 * i, borderWidth: 3, borderColor: 'white' }}
        />,
      );
      userNamesList.push(userID + ', ');
    }
    profileImgList.push(
      <View style={styles.numProfilesCircle}>
        <View style={styles.insideCircle}>
          <Text
            style={{
              ...Typography.p2,
              color: Colors.white,
              ...Typography.bold,
            }}>
            {numUsers - 3 + ' +'}
          </Text>
        </View>
      </View>,
    );
    userNamesList.push('+' + (numUsers - 3) + ' more');
    profileImgList.push(
      <Text style={{ ...styles.userNameText, left: -15 * 3 }}>
        {userNamesList}
      </Text>,
    );
  }
  return (
    <View style={{ ...propStyles, ...styles.container }}>{profileImgList}</View>
  );
};

export default MultiProfileImg;
