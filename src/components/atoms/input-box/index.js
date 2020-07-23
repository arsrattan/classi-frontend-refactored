import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { searchImg } from '_assets';

const InputBox = ({ placeholderText, icon, value, onChange, name }) => {
  function handleChange(text, e) {
    onChange(text, e);
  }
  let iconImage;
  if (icon !== undefined) {
    iconImage = <Image source={icon} style={styles.icon} />;
  }
  return (
    <View style={styles.writeCommentView}>
      {iconImage}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholderText}
      />
    </View>
  );
};

export default InputBox;
