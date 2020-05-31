import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import PopupMenu from '../popup-menu';
import { fontFamily, popularImg } from '_assets';

const ClassCard = ({ navigation, item, showLive, popular, style }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Class', { classDetails: item })
      }}
      style={[styles.cardContainer, { style }]}
    >
    <View style={styles.cardHeader}>
      <Image
        style={{ borderRadius: 28 }}
        source={{
          uri: item.url,
          width: 40,
          height: 40,
        }}
      />
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.classBy}>
          {item.classBy}
        </Text>
        <Text
          style={{
            fontSize: 11,
            lineHeight: 14,
            color: '#334E68',
            paddingTop: 5,
            fontFamily: fontFamily.book,
          }}
        >
          {item.post}
        </Text>
      </View>
      <PopupMenu />
    </View>

    <View style={{ height: '40%' }}>
      <ImageBackground
        source={{
          uri: item.url,
        }}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'cover'}
      >
        {popular ? (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingTop: 10,
            }}
          >
            <Image source={popularImg} />
            <View style={styles.durationContainer}>
              <Text style={styles.durationText}>{item.duration}</Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
              paddingTop: 10,
            }}
          >
            <View style={styles.durationContainer}>
              <Text style={styles.durationText}>{item.duration}</Text>
            </View>

            {showLive && (
              <View style={styles.liveContainer}>
                <Text style={styles.liveText}>Live</Text>
              </View>
            )}
          </View>
        )}
        <View style={styles.dateTag}>
          <Text style={styles.date}>26</Text>
          <Text style={styles.month}>Apr</Text>
        </View>
      </ImageBackground>
    </View>
    <View style={{ paddingTop: 10, paddingLeft: 12 }}>
      <Text style={styles.className}>{item.className}</Text>
      <Text style={styles.dateAndTime}>{item.dateAndTime}</Text>
      <Text style={styles.dateAndTime}>{item.registered}</Text>
    </View>
  </TouchableOpacity>
  )
};

export default ClassCard;
