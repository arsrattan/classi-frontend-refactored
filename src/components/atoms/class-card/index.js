import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {ProfileImg, Tag} from '_atoms';
import {Colors} from '_styles';
import PopupMenu from '../popup-menu';
import styles from './styles';

const ClassCard = ({navigation, item, showLive, popular, style}) => {
  const date = new Date(parseInt(item.scheduledTime));
  const month = date.toLocaleString('default', {month: 'short'});
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Class', {classDetails: item});
      }}
      style={[styles.cardContainer, {style}]}>
      <View style={styles.cardHeader}>
        <ProfileImg size="small" />
        <View style={styles.instructorTextContainer}>
          <Text style={styles.p1dark1}>{item.instructorUserId}</Text>
        </View>
        <PopupMenu />
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: item.url,
          }}
          style={styles.image}
          resizeMode={'cover'}>
          <View style={styles.tagContainer}>
            <Tag color={Colors.aquarius} text={item.expectedDuration} />
            {showLive && <Tag color={Colors.livePink} text="Live" />}
          </View>
          <View style={styles.dateTag}>
            <Text style={styles.date}>{date.getDate()}</Text>
            <Text style={styles.month}>{month}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.classDetailContainer}>
        <Text style={styles.classNameText}>{item.className}</Text>
        <Text style={styles.scheduledTime}>
          {item.registeredUsers == null
            ? '0 users registered'
            : item.registeredUsers.length + 'users registered'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClassCard;
