import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Header } from '_molecules';
import { avatarImg, notificationImg } from '_assets';
import { GetAllClasses } from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import { Colors, Typography } from '_styles';
import { GraphQLClient } from '_services';
import {
  UpcomingClasses,
  FriendsClasses,
  RecommendedClasses,
} from '_molecules';

const HomeScreen = ({ navigation }) => {
  const { data, loading } = GetAllClasses();

  const [tokenData, setTokenData] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      const res = await AsyncStorage.getItem('USER_ID');
      setTokenData(res);
    };

    const fetchClasses = async () => {
      const { data, error, loading } = await GraphQLClient.queryAllClasses();
      setClasses(data);
    };

    fetchToken();
    fetchClasses();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.sirius}
          text={
            <Text
              style={{
                ...Typography.p1,
                ...Typography.bold,
                color: Colors.white,
              }}>
              Welcome back
              <Text style={{ color: Colors.andromeda }}>{tokenData || ''}</Text>
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
        <UpcomingClasses navigation={navigation} classes={data} />
        <FriendsClasses navigation={navigation} classes={data} />
        <RecommendedClasses navigation={navigation} classes={data} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
