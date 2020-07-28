import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { crossImg, menuImg } from '_assets';
import { NotifTile } from '_molecules';
import { Icons, Spacing, Typography } from '_styles';
import {
  GetUserNotifications,
  GetCurrentUserId,
  GetUserFollowing,
} from '../../utils/backendServices/usersService';

moment().format();

var notificationText = function (type) {
  let text = '';
  if (type == 'New_Follower') {
    text = 'started following you';
  } else if (type == 'New_Class_Comment') {
    text = 'commented on your class';
  } else if (type == 'New_Post_Comment') {
    text = 'commented on your post';
  } else if (type == 'New_Class_Like') {
    text = 'liked your class';
  } else if (type == 'New_Post_Like') {
    text = 'liked your post';
  } else if (type == 'New_Class_Registration') {
    text = 'signed up for you class';
  }
  return text;
};

var checkIfFollowingUser = function (userId, followingData) {
  let res = false;
  for (let follower of followingData) {
    if (follower.userId == userId) {
      res = true;
    }
  }
  return res;
};

const NotificationsScreen = ({ navigation }) => {
  const userId = GetCurrentUserId();
  const { notificationData, notificationLoading } = GetUserNotifications(
    userId,
  );
  const { followingData, followingLoading } = GetUserFollowing(userId);
  return (
    <ScrollView style={styles.container}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View style={styles.notificationHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={crossImg} style={Icons.normal} />
        </TouchableOpacity>
        <Text style={{ ...Typography.p1d2, ...Typography.bold }}>
          Notifications
        </Text>
        <TouchableOpacity>
          <Image source={menuImg} style={Icons.normal} />
        </TouchableOpacity>
      </View>
      {notificationData.map((item) => {
        const timeAgo = moment(parseInt(item.createdAt)).fromNow();
        return (
          <NotifTile
            user={item.triggeringUserId}
            action={notificationText(item.notificationType)}
            date={timeAgo}
            isFollow={item.notificationType == 'New_Follower'}
            imageUrl={item.channel_thumbnail_url}
            active={checkIfFollowingUser(item.triggeringUserId, followingData)}
          />
        );
      })}
    </ScrollView>
  );
};

export default NotificationsScreen;
