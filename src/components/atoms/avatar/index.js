import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {avatarImg} from '_assets';

const Avatar = ({style}) => {
  return <Image source={avatarImg} style={styles.icon} />;
};

export default Avatar;
