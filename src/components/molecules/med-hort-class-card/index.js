import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

// Used on the feed screen inside of a post to show the completed class

const MedHortClassCard = (props) => (
  <TouchableOpacity style={styles.classContainer}>
    <Image
      source={{uri: 'https://placebeard.it/640x360'}}
      style={styles.classPicture}
    />
    <View style={styles.textContainer}>
      <Text style={styles.classNameText}>Cooking for Dummies</Text>
      <Text style={styles.instructorText}>by Tafia Salsabila</Text>
      <Text style={styles.dateText}>on 12 April 2019 at 10:47 AM</Text>
    </View>
  </TouchableOpacity>
);

export default MedHortClassCard;
