import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {Header} from '_molecules';
import {ImageTile} from '_atoms';
import {avatarImg, notificationImg, cameraImg, arrowImg} from '_assets';
import {createClassCards, classData} from '_utils';
import {GetAllClasses} from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
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

  const items = [
    // this is the parent or 'item'
    {
      id: 0,
      name: 'Class Types',
      // these are the children or 'sub items'
      children: [
        {
          name: 'HIIT',
          id: 10,
        },
        {
          name: 'Yoga',
          id: 17,
        },
        {
          name: 'Cardio',
          id: 13,
        },
        {
          name: 'Core',
          id: 14,
        },
        {
          name: 'Strength',
          id: 15,
        },
        {
          name: 'Pilates',
          id: 16,
        },
      ],
    },
  ];

  const [classTypes, changeClassTypes] = useState([]);
  const [classTypeObjects, changeClassTypeObjects] = useState([]);

  onSelectedItemsChange = (selectedItems) => {
    changeClassTypes(selectedItems);
  };

  onSelectedItemObjectsChange = (selectedItemObjects) => {
    changeClassTypeObjects(selectedItemObjects);
  };

  renderSelectText = () => {
    let selectText;
    if (classTypes.length >= 3) {
      selectText = ` ${classTypeObjects[0].name} + ${
        classTypes.length - 1
      } More Classes`;
    } else if (classTypes.length >= 1) {
      selectText = ` ${classTypeObjects
        .map((item, i) => {
          let label = `${item.name}, `;
          if (i === classTypeObjects.length - 2) label = `${item.name} and `;
          if (i === classTypeObjects.length - 1) label = `${item.name} Classes`;
          return label;
        })
        .join('')}`;
    } else {
      selectText = ` All Classes`;
    }

    /*
    const selectText = classTypes.length
      ? ` ${classTypeObjects
          .map((item, i) => {
            let label = `${item.name}, `;
            if (i === classTypeObjects.length - 2) label = `${item.name} and `;
            if (i === classTypeObjects.length - 1)
              label = `${item.name} Classes`;
            return label;
          })
          .join('')}`
      : 'Select a fruit';
      */

    return (
      <Text style={{color: Colors.aries, ...Typography.h3}}>
        I'm interested in
        <Text style={{color: Colors.andromeda, ...Typography.bold}}>
          {selectText}
        </Text>
      </Text>
    );
  };

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
        {
          (data.length = 0 ? (
            <View style={styles.topSectionContainer}>
              <Text style={styles.lightSectionHeader}>
                Your Upcoming Classes
              </Text>
              {createClassCards(data, navigation)}
            </View>
          ) : null)
        }

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
              marginBottom: Spacing.smallest,
            }}>
            {'Recommended Classes'.toUpperCase()}
          </Text>
          <View style={styles.classFilterContainer}>
            <SectionedMultiSelect
              onSelectedItemsChange={onSelectedItemsChange}
              onSelectedItemObjectsChange={onSelectedItemObjectsChange}
              selectedItems={classTypes}
              renderSelectText={renderSelectText}
              alwaysShowSelectText={false}
              expandDropDowns={true}
              items={items}
              uniqueKey="id"
              subKey="children"
              readOnlyHeadings={true}
              modalWithTouchable={true}
              searchPlaceholderText="Search class types"
              itemFontFamily={{...Typography.p1, ...Typography.bold}}
              subItemFontFamily={{...Typography.p1, ...Typography.bold}}
              searchTextFontFamily={{...Typography.p1, ...Typography.bold}}
              confirmFontFamily={{...Typography.h3, ...Typography.bold}}
              styles={{
                container: {marginTop: 200, marginBottom: 150},
                selectToggle: {backgroundColor: Colors.grey},
                chipContainer: {marginTop: Spacing.smaller},
              }}
              colors={{primary: Colors.andromeda}}
            />
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
