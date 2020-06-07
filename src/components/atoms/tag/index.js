import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Tag = ({text, color}) => (
  <View style={[styles.tagStyle, {backgroundColor: color}]}>
    <Text style={styles.textStyle}>{text}</Text>
  </View>
);

export default Tag;
