import React from 'react';
import { Text, View } from 'react-native';
import { FollowButton, ProfileImg, Divider } from '_atoms';
import styles from './styles';

const NotifTile = ({ user, action, date, isFollow, imageUrl, active }) => {
  let followBttn;
  if (isFollow === true) {
    followBttn = (
      <FollowButton followedUser={user} isUnfollow={false} active={active} />
    );
  }
  return (
    <View>
      <View style={styles.notifContainer}>
        <ProfileImg
          userProfileImg={
            imageUrl == null
              ? 'https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png'
              : imageUrl
          }
          size="small"
        />
        <View style={styles.notifContentContainer}>
          <Text style={styles.userNameText}>
            <Text>{user}</Text>
            {' ' + action}
          </Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View>{followBttn}</View>
      </View>
      <Divider />
    </View>
  );
};
export default NotifTile;
