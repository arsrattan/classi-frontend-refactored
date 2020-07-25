import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { arrowBackDarkImg } from '_assets';
import { Icons, Spacing, Typography, Colors } from '_styles';
import styles from './styles';
import { Button } from '_atoms';
import { LoginNavigator } from '_navigations';

const EmailLoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.flexRow}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={arrowBackDarkImg} style={Icons.normal} />
        </TouchableOpacity>
        <Text style={Typography.p1d2}>Continue with email</Text>
      </View>
      <LoginNavigator navigation={navigation} />
    </View>
  );
};

export default EmailLoginScreen;
