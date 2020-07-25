import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const SquareButton = ({ icon, onPressAction }) => (
  <TouchableOpacity
    onPress={() => {
      onPressAction;
    }}>
    <Image source={icon} style={styles.iconLarger} />
  </TouchableOpacity>
);

export default SquareButton;
