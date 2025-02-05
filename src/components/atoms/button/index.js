import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import InstagramLogin from 'react-native-instagram-login';
import { Typography, Colors, Icons, Spacing } from '_styles';

/**
 * Create the header at the top of each screen.
 * @param {boolean} isSubmitting - state of the backend call after button is pressed
 */

const Button = ({
  text,
  type,
  icon,
  color,
  style,
  navigation,
  screen,
  onPress,
  isSubmitting,
  onPressParams,
}) => {
  let buttonStyle;
  let textStyle;
  if (type === 'PrimaryRound') {
    buttonStyle = {
      backgroundColor: Colors.andromeda,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = { ...Typography.p1white };
  } else if (type === 'PrimarySquare') {
    buttonStyle = {
      backgroundColor: Colors.andromeda,
      borderRadius: 10,
      ...styles.postButtonPadding,
    };
    textStyle = { ...Typography.p1white };
  } else if (type === 'SecondaryRound') {
    buttonStyle = {
      backgroundColor: Colors.white,
      borderColor: Colors.andromeda,
      borderWidth: 1,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = { ...Typography.p1, color: Colors.andromeda };
  } else if (type === 'TertiaryRound') {
    buttonStyle = {
      backgroundColor: Colors.lightGrey,
      borderColor: 'rgba(161, 174, 183, 0.1)',
      borderWidth: 1,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = { ...Typography.p1, color: Colors.aries };
  } else {
    buttonStyle = {
      backgroundColor: color,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = { ...Typography.p1white };
  }

  return (
    <TouchableOpacity
      style={{ ...buttonStyle, ...style }}
      onPress={() => {
        if (onPress !== undefined) {
          onPress();
        } else {
          navigation.navigate(screen, onPressParams);
        }
      }}>
      {icon !== undefined ? (
        <Image
          source={icon}
          style={[Icons.normal, { marginRight: Spacing.smallest }]}
        />
      ) : (
        <Text />
      )}
      {isSubmitting ? (
        <ActivityIndicator animating={true} color={Colors.white} />
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
