import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { createClassCards } from '_utils';
import { Colors, Spacing, Typography, Icons } from '_styles';
import { cameraImg } from '_assets';

const FriendsClasses = ({ navigation, classes }) => {
  if (classes !== undefined && classes.length > 0) {
    return (
      <View style={styles.lightBackgroundContainer}>
        <View style={styles.classHappeningHeader}>
          <Image
            source={cameraImg}
            style={{ ...Icons.normal, marginRight: Spacing.smaller }}
          />
          <Text style={{ ...Typography.h3, color: Colors.aquarius }}>
            Your friend's recent classes
          </Text>
        </View>
        {createClassCards(classes, navigation)}
      </View>
    );
  }
  return null;
};

export default FriendsClasses;
