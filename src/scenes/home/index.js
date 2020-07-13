import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, ScrollView, Image, FlatList} from 'react-native';
import styles from './styles';
import {Header} from '_molecules';
import {ImageTile} from '_atoms';
import {cameraImg, arrowImg, avatarImg, notificationImg} from '_assets';
import {createClassCards} from '_utils';
import {GetAllClasses} from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors, Spacing, Typography} from '_styles';

const HomeScreen = ({navigation}) => {
  const {data, loading} = GetAllClasses();
  const [state, setState] = useState({tokenData: null});
  useEffect(() => {
    const asyncFetchToken = async () => {
      const res = await AsyncStorage.getItem('USER_ID');
      setState(res);
    };
    asyncFetchToken();
  }, [state]);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.aquarius}
          text={
            <Text
              style={{
                ...Typography.p1,
                ...Typography.bold,
                color: Colors.white,
              }}>
              Welcome back
              <Text style={{color: Colors.andromeda}}>
                {state == null ? '' : state.tokenData}
              </Text>
            </Text>
          }
          writePost={false}
          leftIcon={avatarImg}
          onPressLeftIcon={() => {
            navigation.navigate('Profile');
          }}
          rightIcon={notificationImg}
          onPressRightIcon={() => {
            navigation.navigate('Notifications');
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.topSectionContainer}>
          <Text
            style={{...styles.lightSectionHeader, paddingTop: Spacing.base}}>
            Your Next Live Classes
          </Text>
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
          <ImageTile navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
