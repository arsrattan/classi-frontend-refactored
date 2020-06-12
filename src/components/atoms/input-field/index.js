import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {default as Divider} from '../divider';
import {Colors, Spacing, Typography} from '_styles';

const InputField = ({label, placeholderText, onPress, value}) => {
  let inputField;
  if (onPress === undefined) {
    inputField = (
      <TextInput placeholder={placeholderText} style={Typography.p1d2} />
    );
  } else {
    inputField = (
      <TouchableOpacity style={styles.backArrow} onPress={onPress}>
        <Text style={{...Typography.p1, color: Colors.aries}}>
          {value.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <Text
        style={[
          Typography.p1d2,
          {paddingTop: Spacing.base, paddingBottom: Spacing.smallest},
        ]}>
        {label}
      </Text>
      {inputField}
      <Divider color={Colors.grey} style={{marginVertical: Spacing.smallest}} />
    </View>
  );
};

export default InputField;
