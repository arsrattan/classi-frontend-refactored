import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { createClassCards } from '_utils';

const UpcomingClasses = ({ navigation, classes }) => {
  if (classes !== undefined && classes.length > 0) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.lightSectionHeader}>Your Upcoming Classes</Text>
        {createClassCards(classes, navigation)}
      </View>
    );
  }
  return null;
};

export default UpcomingClasses;
