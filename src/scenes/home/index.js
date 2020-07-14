import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import {Header} from '_molecules';
import {ImageTile} from '_atoms';
import {avatarImg, notificationImg, cameraImg, arrowImg} from '_assets';
import {createClassCards, classData} from '_utils';
import {GetAllClasses} from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors, Spacing, Typography, Icons} from '_styles';

const HomeScreen = ({navigation}) => {
  const {data, loading} = GetAllClasses();
  const [state, setState] = useState({tokenData: null});
  var filterClassData = function (textFilter, classType, classData) {
    return classData == null
      ? []
      : classData.filter(function (c) {
          return (
            c.classType.indexOf(classType) != -1 &&
            c.classType.indexOf(textFilter) != -1
          );
        });
  };

  const [filterVal, setFilterVal] = useState('');
  const [values, setValues] = useState({className: ''});

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
          <Text style={styles.lightSectionHeader}>Your Upcoming Classes</Text>
          {createClassCards(data, navigation)}
        </View>

        <View style={styles.lightBackgroundContainer}>
          <View style={styles.classHappeningHeader}>
            <Image
              source={cameraImg}
              style={{...Icons.normal, marginRight: Spacing.smaller}}
            />
            <Text style={{...Typography.h3, color: Colors.aquarius}}>
              Your friend's recent classes
            </Text>
          </View>
          {createClassCards(data, navigation)}
          <Text
            style={{
              ...Typography.p3,
              color: Colors.aries,
              marginLeft: Spacing.base,
              letterSpacing: 1,
            }}>
            {'Recommended Classes'.toUpperCase()}
          </Text>
          <View style={styles.classFilterContainer}>
            <Text style={{...Typography.h3, color: Colors.aquarius}}>
              I’m interested in...
            </Text>
            <View style={styles.filterSelectContainer}>
              <Text style={styles.h3a1}>All Classes</Text>
              <Image style={Icons.normal} source={arrowImg} />
            </View>
          </View>
          <ImageTile
            classData={filterClassData(values.className, filterVal, data)}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
