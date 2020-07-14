import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Header} from '_molecules';
import {ImageTile} from '_atoms';
import {cameraImg, arrowImg} from '_assets';
import {PopupMenu} from '_atoms';
import {MenuTile} from '_atoms';
import {
  avatarImg,
  notificationImg,
  settingsImg,
  unregisterImg,
  shareImgDark,
  strengthImg,
  girlImg,
  mediatorImg,
  yogaImg,
  cardioImg,
  searchImg,
  filterImg,
} from '_assets';
import {createClassCards} from '_utils';
import {GetAllClasses} from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors, Spacing, Typography} from '_styles';

const HomeScreen = ({navigation}) => {
  const buttonFr = [
    {
      id: 0,
      filter: 'Strength',
      icon: <Image source={strengthImg} style={styles.iconNormal} />,
    },
    {
      id: 1,
      filter: 'HIIT',
      icon: <Image source={girlImg} style={styles.iconNormal} />,
    },
  ];

  const buttonSr = [
    {
      id: 3,
      filter: 'Full Body',
      icon: <Image source={yogaImg} style={styles.iconNormal} />,
    },
    {
      id: 4,
      filter: 'Cardio',
      icon: <Image source={cardioImg} style={styles.iconNormal} />,
    },
    {
      id: 5,
      filter: 'Yoga',
      icon: <Image source={yogaImg} style={styles.iconNormal} />,
    },
  ];

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

  const [pressFr, setPressFr] = useState(-1);
  const [pressSr, setPressSr] = useState(-1);
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

        <View style={styles.topSectionContainer}>
          <View style={styles.classHappeningHeader}>
            <Image source={cameraImg} style={styles.icon} />
            <Text style={styles.lightTextHeader}>Recommended Classes</Text>
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
