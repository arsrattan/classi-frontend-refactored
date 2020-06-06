import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const InputBox = ({placeholderText, icon, onPressAction}) => (
  <View style={styles.inputContainer}>
    <View style={styles.writeCommentView}>
      <TextInput placeholder={placeholderText} />
    </View>
    <TouchableOpacity>
      onPress=
      {() => {
        onPressAction;
      }}
      <Image source={icon} style={styles.iconLarger} />
    </TouchableOpacity>
  </View>
);

export default InputBox;
