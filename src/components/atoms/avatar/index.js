import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import { avatarImg } from '_assets';

const Avatar = ({style}) => {
  return (
    <View style={[styles.avatar, style]}>
      <Image
        source={avatarImg}
        width={20}
        height={20}
      />
    </View>
  );
};

export default Avatar;