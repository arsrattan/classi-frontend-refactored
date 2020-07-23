import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Colors } from '_styles';

const Divider = ({ color, style }) => {
  if (color !== undefined) {
    return (
      <View
        style={{ borderColor: color, ...styles.dividerViewBase, ...style }}
      />
    );
  } else {
    return <View style={[styles.dividerView]} />;
  }
};

export default Divider;
