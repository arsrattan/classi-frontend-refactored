import React, { useRef, useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { default as Divider } from '../divider';
import { Colors, Spacing, Typography } from '_styles';

const InputField = ({
  label,
  placeholderText,
  onPress,
  value,
  onChange,
  name,
}) => {
  let inputField;
  function handleChange(text, e) {
    onChange(text, e);
  }
  if (onPress === undefined) {
    if (name == 'firstName' || name == 'lastName') {
      inputField = (
        <TextInput
          placeholder={placeholderText}
          style={Typography.p1d2}
          value={value}
          onChangeText={(text) => handleChange(text, name)}
        />
      );
    } else if (name == 'password') {
      inputField = (
        <TextInput
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder={placeholderText}
          style={Typography.p1d2}
          value={value}
          onChangeText={(text) => handleChange(text, name)}
        />
      );
    } else {
      inputField = (
        <TextInput
          autoCapitalize="none"
          placeholder={placeholderText}
          style={Typography.p1d2}
          value={value}
          onChangeText={(text) => handleChange(text, name)}
        />
      );
    }
  } else {
    inputField = (
      <TouchableOpacity onPress={onPress}>
        <Text style={{ ...Typography.p1, color: Colors.aries }}>
          {value.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    );
  }
  if (label === undefined) {
    return (
      <View>
        {inputField}
        <Divider
          color={Colors.grey}
          style={{ marginVertical: Spacing.smallest }}
        />
      </View>
    );
  }
  return (
    <View>
      <Text
        style={[
          Typography.p1d2,
          { paddingTop: Spacing.base, paddingBottom: Spacing.smallest },
        ]}>
        {label}
      </Text>
      {inputField}
      <Divider
        color={Colors.grey}
        style={{ marginVertical: Spacing.smallest }}
      />
    </View>
  );
};

export default InputField;
