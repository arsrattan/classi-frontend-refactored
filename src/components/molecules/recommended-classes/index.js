import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { arrowImg } from '_assets';
import { ImageTile } from '_atoms';
import styles from './styles';

const RecommendedClasses = ({ navigation, classes }) => {
  const [values, setValues] = useState({ className: '' });
  const [filterVal, setFilterVal] = useState('');

  const filterClassData = (textFilter, classType, classData) => {
    return classData.filter(
      (c) =>
        c.classType.indexOf(classType) !== -1 &&
        c.classType.indexOf(textFilter) !== -1,
    );
  };

  if (classes !== undefined && classes.length > 0) {
    return (
      <View style={styles.lightBackgroundContainer}>
        <Text style={styles.sectionHeader}>
          {'Recommended Classes'.toUpperCase()}
        </Text>
        <View style={styles.classFilterContainer}>
          <Text style={styles.interestedText}>I’m interested in...</Text>
          <View style={styles.filterSelectContainer}>
            <Text style={styles.h3a1}>All Classes</Text>
            <Image style={styles.arrowIcon} source={arrowImg} />
          </View>
        </View>
        <ImageTile
          classData={filterClassData(values.className, filterVal, classes)}
          navigation={navigation}
        />
      </View>
    );
  }
  return null;
};

export default RecommendedClasses;
