import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Typography, Colors} from '_styles';
import {Icons, Spacing} from '_styles';
import InstagramLogin from 'react-native-instagram-login'

const Button = ({
  text,
  type,
  icon,
  color,
  style,
  navigation,
  screen,
  onPress,
}) => {
  let buttonStyle;
  let textStyle;
  if (type === 'PrimaryRound') {
    buttonStyle = {
      backgroundColor: Colors.andromeda,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = {...Typography.p1white};
  } else if (type === 'PrimarySquare') {
    buttonStyle = {
      backgroundColor: Colors.andromeda,
      borderRadius: 10,
      ...styles.postButtonPadding,
    };
    textStyle = {...Typography.p1white};
  } else if (type === 'SecondaryRound') {
    buttonStyle = {
      backgroundColor: Colors.white,
      borderColor: Colors.andromeda,
      borderWidth: 1,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = {...Typography.p1, color: Colors.andromeda};
  } else if (type === 'TertiaryRound') {
    buttonStyle = {
      backgroundColor: Colors.lightGrey,
      borderColor: 'rgba(161, 174, 183, 0.1)',
      borderWidth: 1,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = {...Typography.p1, color: Colors.aries};
  } else {
    buttonStyle = {
      backgroundColor: color,
      borderRadius: 25,
      ...styles.postButtonPadding,
    };
    textStyle = {...Typography.p1white};
  }

  return (
    <TouchableOpacity
      style={{...buttonStyle, ...style}}
      onPress={() => {
        if (onPress !== undefined) {
          onPress();
        } else {
          navigation.navigate(screen);
        }
      }}>
      {icon !== undefined ? (
        <Image
          source={icon}
          style={[Icons.normal, {marginRight: Spacing.smallest}]}
        />
      ) : (
        <Text />
      )}
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
