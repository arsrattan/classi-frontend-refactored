import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Header } from '_molecules';
import { avatarImg, notificationImg } from '_assets';
// import { GetAllClasses } from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import { Colors, Typography } from '_styles';
import { GraphQLClient } from '_services';
import {
  UpcomingClasses,
  FriendsClasses,
  RecommendedClasses,
} from '_molecules';

const HomeScreen = ({ navigation }) => {
  // const { data, loading } = GetAllClasses();

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
<<<<<<< HEAD
        <View style={styles.topSectionContainer}>
          <Text style={styles.lightSectionHeader}>Your Upcoming Classes</Text>
          {createClassCards(data, navigation)}
        </View>
        
        <View style={styles.lightBackgroundContainer}>
          <View style={styles.classHappeningHeader}>
            <Image source={cameraImg} style={styles.icon} />
            <Text style={styles.darkTextHeader}>Recommended Classes</Text>
          </View>
          {/* {createClassCards(data, navigation)} */}
          {/* <Text style={styles.darkTextHeader}>Recommended Classes</Text> */}
          <View style={styles.classFilterContainer}>
            <Text style={styles.h3d2}>I’m interested in...</Text>
          </View>
          <FlatList
            style={{marginTop: 18, marginLeft: 18}}
            data={buttonFr}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (pressSr !== -1) {
                      setPressSr(-1);
                    }
                    setPressFr(item.id);
                    setFilterVal(item.filter);
                  }}
                  style={[
                    styles.filterChip,
                    {
                      backgroundColor: pressFr == item.id ? '#F86A6A' : '#fff',
                    },
                  ]}>
                  <View style={{marginRight: 10}}>{item.icon}</View>
                  <Text
                    style={[
                      styles.filterChipText,
                      {
                        color: pressFr == item.id ? '#fff' : '#102A43',
                      },
                    ]}>
                    {item.filter}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => {
              item.id;
            }}
          />
          <FlatList
            style={{marginLeft: 18}}
            data={buttonSr}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (pressFr !== -1) {
                      setPressFr(-1);
                    }
                    setPressSr(item.id);
                    setFilterVal(item.filter);
                  }}
                  style={[
                    styles.filterChip,
                    {
                      backgroundColor: pressSr == item.id ? '#F86A6A' : '#fff',
                    },
                  ]}>
                  <View style={{marginRight: 10}}>{item.icon}</View>
                  <Text
                    style={[
                      styles.filterChipText,
                      {
                        color: pressSr == item.id ? '#fff' : '#102A43',
                      },
                    ]}>
                    {item.filter}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => {
              item.id;
            }}
          />
          <ImageTile classData={filterClassData(values.className, filterVal, data)} navigation={navigation} />
        </View>
=======
        <UpcomingClasses navigation={navigation} classes={classes} />
        <FriendsClasses navigation={navigation} classes={classes} />
        <RecommendedClasses navigation={navigation} classes={classes} />
>>>>>>> master
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
