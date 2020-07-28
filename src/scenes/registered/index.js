import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { crossImg, registeredImg, shareImgLight } from '_assets';
import { Button } from '_atoms';
import { Icons, Spacing, Typography } from '_styles';
import styles from './styles';

const RegisteredScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainContainer}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.crossButton}>
          <Image source={crossImg} style={Icons.normal} />
        </TouchableOpacity>

        <Image source={registeredImg} style={Icons.halfScreen} />
        <Text style={Typography.h1d1}>Congratulations!</Text>
        <View style={styles.subtextContainer}>
          <Text
            style={[
              Typography.p1d2,
              { textAlign: 'center', paddingBottom: Spacing.large },
            ]}>
            You are registered for{' '}
            <Text style={{ fontWeight: 'bold' }}>‘Cooking for Dummies’</Text>.
            We will add this class to your upcoming class.
          </Text>
          <Button
            text="Invite your friends"
            type="PrimaryRound"
            icon={shareImgLight}
          />
        </View>
      </View>
      <View style={styles.postContainer}>
        <Text style={Typography.p1d2}>
          Share this class with your followers!
        </Text>
        <View style={styles.optionalView}>
          <TextInput
            multiline={true}
            style={styles.placeholderText}
            placeholder="Optional: add a caption "
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button text="Post" type="PrimarySquare" />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisteredScreen;
