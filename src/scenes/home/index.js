import React from 'react';
import {View, Text, StatusBar, ScrollView, Image, FlatList} from 'react-native';
import styles from './styles';
import {Header} from '_molecules';
import {ImageTile} from '_atoms';
import {cameraImg, arrowImg} from '_assets';
import {createClassCards} from '_utils';
import {GetAllClasses} from '../../utils/backendServices/classService';

const HomeScreen = ({navigation}) => {
  const {data, loading} = GetAllClasses();
  return (
    <View style={styles.homeContainer}>
      {StatusBar.setBarStyle('light-content', true)}
      <View style={styles.headerContainer}>
        <Header
          navigation={navigation}
          headerStyle="dark"
          text="Welcome back"
          accentText="Derek"
          writePost={false}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.topSectionContainer}>
          <Text style={styles.lightSectionHeader}>Your Next Live Classes</Text>
          {createClassCards(data, navigation)}
        </View>
        <View style={styles.lightBackgroundContainer}>
          <View style={styles.classHappeningHeader}>
            <Image source={cameraImg} style={styles.icon} />
            <Text style={styles.darkTextHeader}>Classes Happening Now</Text>
          </View>
          {createClassCards(data, navigation)}
          <Text style={styles.darkTextHeader}>Recommended Classes</Text>
          <View style={styles.classFilterContainer}>
            <Text style={styles.h3d2}>I’m interested in...</Text>
            <View style={styles.filterSelectContainer}>
              <Text style={styles.h3a1}>All Classes</Text>
              <Image style={styles.icon} source={arrowImg} />
            </View>
          </View>
          <ImageTile props={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
