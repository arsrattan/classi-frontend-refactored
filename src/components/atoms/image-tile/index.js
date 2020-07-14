import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {classesOverviewData} from '_utils';
import {seeImg, loveImg, menuImg, unregisterImg, shareImgDark} from '_assets';
import styles from './styles';
import {ProfileImg, Tag} from '_atoms';

const ImageTile = ({navigation, classData}) => {
  return (
    <View style={styles.tileContainer}>
      {classData.map((item) => {
        return (
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              navigation.navigate('Class', {
                classDetails: item,
                isWatching: true,
              });
            }}>
            <View style={styles.cardHeader}>
              <ProfileImg
                userProfileImg={item.channel_thumbnail_url}
                size="small"
              />
              <Text style={styles.instructorTextContainer}>
                {item.instructorUserId}
              </Text>
            </View>
            <View style={styles.cardHeader}>
              <Text style={styles.classNameText}>
                {item.className.replace(/(.{80})..+/, '$1...')}
              </Text>
              <Text style={styles.additionalClassDetailsText}></Text>
            </View>
            <ImageBackground
              imageStyle={{
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              resizeMode="cover"
              source={{
                uri: item.class_image_url,
              }}
              style={styles.imageStyle}></ImageBackground>
            <View style={styles.textContainer}>
              <View style={styles.iconContainer}>
                <View style={styles.iconGroup}>
                  <Image source={seeImg} style={styles.icon} />
                  <Text style={styles.additionalClassDetailsText}>2459</Text>
                </View>
                <Image source={loveImg} style={styles.icon} />
                <Text style={styles.additionalClassDetailsText}>2459</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ImageTile;
