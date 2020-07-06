import React from 'react';
import moment from 'moment';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

// Used on the feed screen inside of a post to show the completed class
moment().format();

const MedHortClassCard = ({navigation, classData}) => {
  console.log(classData);
  return (
    <TouchableOpacity style={styles.classContainer} onPress={() => {
      navigation.navigate('Class', {classDetails: classData[0]});//fwefe
    }}>
      <Image
        source={{uri: classData[0] != null ? classData[0].s3url : ''}}
        style={styles.classPicture}
      />
      <View style={styles.textContainer}>
        <Text style={styles.classNameText}>{classData[0] != null ? classData[0].className : ''}</Text>
        <Text style={styles.instructorText}>by {classData[0] != null ? classData[0].instructorUserId : ''}</Text>
        <Text style={styles.dateText}>{classData[0] != null ? moment(parseInt(classData[0].createdAt)).fromNow(): ''}</Text>
      </View>
    </TouchableOpacity>
    );
};

export default MedHortClassCard;
