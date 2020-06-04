import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {fontFamily} from '_assets';
import {FollowButton} from '_atoms';
import {ProfileImg} from '_atoms';

const NotifTile = ({user, action, date, isFollow}) => {
  let followBttn;
  if (isFollow === true) {
    followBttn = <FollowButton />;
  }
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
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
