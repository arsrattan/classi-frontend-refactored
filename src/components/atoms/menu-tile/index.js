import * as React from 'react';
import {Alert, Image, Text, TouchableOpacity} from 'react-native';
import {Icons, Typography, Spacing} from '_styles';
import styles from './styles';

const MenuTile = ({icon, text, navigation, screen}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screen);
      }}
      style={styles.optionTile}>
      <Image
        source={icon}
        style={[Icons.small, {marginRight: Spacing.small}]}
      />
      <Text style={Typography.p1d2}>{text}</Text>
    </TouchableOpacity>
  );
};
export default MenuTile;
