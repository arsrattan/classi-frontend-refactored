import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ProfileImg, Tag } from '_atoms';
import { Colors } from '_styles';
import PopupMenu from '../popup-menu';
import { menuImg, unregisterImg, shareImgDark } from '_assets';
import MenuTile from '../menu-tile';
import styles from './styles';

const ClassCard = ({ navigation, item, showLive, popular, style }) => {
  const date = new Date(parseInt(item.scheduledTime));
  const month = date.toLocaleString('default', { month: 'short' });
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Class', { classDetails: item });
      }}
      style={{ ...styles.cardContainer, ...style }}>
      <View style={styles.cardHeader}>
        <ProfileImg userProfileImg={item.channel_thumbnail_url} size="small" />
        <View style={styles.instructorTextContainer}>
          <Text style={styles.p1dark1}>{item.instructorUserId}</Text>
        </View>
        {/* <PopupMenu
          icon={menuImg}
          options={[
            <MenuTile icon={shareImgDark} text="Share class" />,
            <MenuTile icon={unregisterImg} text="Unregister class" />,
          ]}
        /> */}
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: item.class_image_url,
          }}
          style={styles.image}
          resizeMode={'cover'}>
          {/* <View style={styles.tagContainer}>
            <Tag color={Colors.aquarius} text={item.expectedDuration} />
            {showLive && <Tag color={Colors.livePink} text="Live" />}
          </View> */}
          {/* <View style={styles.dateTag}>
            <Text style={styles.date}>{date.getDate()}</Text>
            <Text style={styles.month}>{month}</Text>
          </View> */}
        </ImageBackground>
      </View>
      <View style={styles.classDetailContainer}>
        <Text style={styles.classNameText}>
          {item.className.replace(/(.{30})..+/, '$1...')}
        </Text>
        <Text style={styles.scheduledTime}>
<<<<<<< HEAD
          {item.expectedDuration + ' minutes'}
=======
          {item.registeredUsers == null
            ? '0 users registered'
            : item.registeredUsers + ' users registered'}
>>>>>>> master
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClassCard;
