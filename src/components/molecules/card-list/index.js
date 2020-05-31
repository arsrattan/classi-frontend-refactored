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
import { classesMockData } from '_utils';

const Card = ({ navigation, style, showLive, classBy, popular }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 20 }}>
      <FlatList
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
        data={classesMockData}
        horizontal={true}
        renderItem={({ item }) => {
          return (
           
          )
        }}
        keyExtractor={(item) => {
          item.id
        }}
      />
    </View>
  )
}
export default Card
