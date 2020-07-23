import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { logoImg, facebookImg, instagramImg, emailImg } from '_assets';
import { Icons, Spacing, Typography, Colors } from '_styles';
import styles from './styles';
import { Button } from '_atoms';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.skipContainer}>
        <Text style={Typography.p1d2}>Skip login for now</Text>
      </TouchableOpacity>
      <View style={styles.centeredContainer}>
        <Image source={logoImg} style={Icons.largest} />
        <Text style={[Typography.h1d1, { paddingTop: Spacing.larger }]}>
          Welcome to Classi
        </Text>
        <Text
          style={[
            Typography.p1d2,
            { textAlign: 'center', paddingTop: Spacing.small },
          ]}>
          The first app designed to make home workouts social. Join today and
          experience the intersection of fitness and fun.
        </Text>
        <View>
          <Button
            text="Continue with Facebook"
            color="#3D5B91"
            icon={facebookImg}
            style={{ marginTop: Spacing.large }}
          />
          <Button
            text="Continue with Instagram"
            color="#d62976"
            icon={instagramImg}
            style={{ marginTop: Spacing.small }}
          />
          <View style={styles.buttonContainer}>
            <Text
              style={[Typography.h3d1, { paddingVertical: Spacing.larger }]}>
              or
            </Text>
          </View>
          <Button
            text="Continue with email"
            icon={emailImg}
            type="SecondaryRound"
            navigation={navigation}
            screen="EmailLogin"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
