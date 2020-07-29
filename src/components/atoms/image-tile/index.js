import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { classesOverviewData } from '_utils';
import { seeImg, loveImg, menuImg, unregisterImg, shareImgDark } from '_assets';
import styles from './styles';
import { Spacing, Typography, Colors } from '_styles';
import { ProfileImg, Tag, Dot } from '_atoms';

const ImageTile = ({ navigation, classData }) => {
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
            {/*
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
              */}
            <ImageBackground
              imageStyle={{
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
              resizeMode="cover"
              source={{
                uri: item.class_image_url,
              }}
              style={{
                width: '100%',
                height:
                  (Dimensions.get('window').width - Spacing.base * 2) *
                  (9 / 16),
              }}></ImageBackground>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                margin: Spacing.smaller,
              }}>
              <ProfileImg
                userProfileImg={item.channel_thumbnail_url}
                size="small"
              />
              <View style={{ marginLeft: Spacing.smaller }}>
                {/* Name of the User making post */}
                <Text style={{ ...Typography.h3, color: Colors.aquarius }}>
                  {item.className.replace(/(.{80})..+/, '$1...')}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ ...Typography.p1, color: Colors.aries }}>
                    {item.instructorUserId}
                  </Text>
                  <Dot size="large" color={Colors.aries} />
                  <Text style={{ ...Typography.p1, color: Colors.aries }}>
                    # Views
                  </Text>
                  <Dot size="large" color={Colors.aries} />
                  <Text style={{ ...Typography.p1, color: Colors.aries }}>
                    Posted Date
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/*
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
            */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ImageTile;
