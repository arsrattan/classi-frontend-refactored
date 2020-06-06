import React from 'react';
import {Text, View} from 'react-native';
import {FollowButton, ProfileImg} from '_atoms';
import styles from './styles';

const NotifTile = ({user, action, date, isFollow}) => {
  let followBttn;
  if (isFollow === true) {
    followBttn = <FollowButton />;
  }
  return (
    <View>
      <View style={styles.notifContainer}>
        <ProfileImg size="small" />
        <View style={styles.notifContentContainer}>
          <Text style={styles.userNameText}>
            <Text>{user}</Text>
            {' ' + action}
          </Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        {followBttn}
      </View>
      <View style={styles.dividerView} />
    </View>
  );
};
export default NotifTile;
