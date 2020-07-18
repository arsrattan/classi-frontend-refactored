import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Tile = ({ text }) => (
  <View style={styles.tileContainer}>
    <Text style={styles.tileText}>{text}</Text>
  </View>
);

export default Tile;
