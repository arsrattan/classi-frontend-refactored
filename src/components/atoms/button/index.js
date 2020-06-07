import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Typography, Colors} from '_styles';
import {Icons, Spacing} from '_styles';

const Button = ({text, type, icon}) => {
  let buttonStyle;
  let textStyle;
  if (type === 'PrimaryRound') {
    buttonStyle = {
      backgroundColor: Colors.andromeda,
      borderRadius: 20,
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
      borderRadius: 20,
      ...styles.postButtonPadding,
    };
    textStyle = {...Typography.p1, color: Colors.andromeda};
  }

  return (
    <TouchableOpacity style={buttonStyle}>
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
