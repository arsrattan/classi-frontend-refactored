import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const FollowButton = () => (
  <TouchableOpacity style={styles.followBtn}>
    <Text style={styles.followTxt}>Follow</Text>
  </TouchableOpacity>
);

export default FollowButton;
