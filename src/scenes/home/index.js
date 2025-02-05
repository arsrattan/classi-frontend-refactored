import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';
import { ImageTile } from '_atoms';
import { Header } from '_molecules';
import { avatarImg, notificationImg, cameraImg } from '_assets';
//import { GetAllClasses } from '../../utils/backendServices/classService';
import AsyncStorage from '@react-native-community/async-storage';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Colors, Spacing, Typography, Icons } from '_styles';
//import { GraphQLClient, Queries } from '_services';
import { createClassCards, ClassService, Queries } from '_utils';
import { useQuery } from '@apollo/client';

const UpcomingClasses = ({ navigation, classes }) => {
  if (classes !== undefined && classes.length > 0) {
    return (
      <View style={styles.topSectionContainer}>
        <Text style={styles.lightSectionHeader}>Your Upcoming Classes</Text>
        {createClassCards(classes, navigation)}
      </View>
    );
  }
  return null;
};

const FriendsClasses = ({ navigation, classes }) => {
  if (classes !== undefined && classes.length > 0) {
    return (
      <View style={styles.lightBackgroundContainer}>
        <View style={styles.classHappeningHeader}>
          <Image
            source={cameraImg}
            style={{ ...Icons.normal, marginRight: Spacing.smaller }}
          />
          <Text style={{ ...Typography.h3, color: Colors.aquarius }}>
            Your friend's recent classes
          </Text>
        </View>
        {createClassCards(classes, navigation)}
      </View>
    );
  }
  return null;
};

const RecommendedClasses = ({ navigation, classes }) => {
  const [values, setValues] = useState({ className: '' });
  const [filterVal, setFilterVal] = useState('');

  const filterClassData = (textFilter, classType, classData) => {
    return classData.filter(
      (c) =>
        c.classType.indexOf(classType) !== -1 &&
        c.classType.indexOf(textFilter) !== -1,
    );
  };

  const classTypesList = [
    {
      name: 'Class Types',
      id: 0,

      children: [
        {
          name: 'Yoga',
          id: 10,
        },
        {
          name: 'HIIT',
          id: 11,
        },
        {
          name: 'Pilates',
          id: 13,
        },
        {
          name: 'Barre',
          id: 14,
        },
        {
          name: 'Strength',
          id: 15,
        },
        {
          name: 'Core',
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

    return (
      <Text style={{ color: Colors.aries, ...Typography.h3 }}>
        I'm interested in
        <Text style={{ color: Colors.andromeda, ...Typography.bold }}>
          {selectText}
        </Text>
      </Text>
    );
  };

  if (classes !== undefined && classes.length > 0) {
    return (
      <View style={styles.lightBackgroundContainer}>
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
            items={classTypesList}
            uniqueKey="id"
            subKey="children"
            readOnlyHeadings={true}
            modalWithTouchable={true}
            searchPlaceholderText="Search class types"
            itemFontFamily={{ ...Typography.p1, ...Typography.bold }}
            subItemFontFamily={{ ...Typography.p1, ...Typography.bold }}
            searchTextFontFamily={{ ...Typography.p1, ...Typography.bold }}
            confirmFontFamily={{ ...Typography.h3, ...Typography.bold }}
            styles={{
              container: { marginTop: 200, marginBottom: 150 },
              selectToggle: { backgroundColor: Colors.grey },
              chipContainer: { marginTop: Spacing.smaller },
            }}
            colors={{ primary: Colors.andromeda }}
          />
        </View>
        <ImageTile
          classData={filterClassData(values.className, filterVal, classes)}
          navigation={navigation}
        />
      </View>
    );
  }
  return null;
};

const HomeScreen = ({ navigation }) => {
  //const { classData, classLoading } = ClassService.GetAllClasses();

  console.log('home reload');
  const classResponse = useQuery(Queries.GetAllClasses);

  useEffect(() => {
    if (classResponse.error) console.log(`error: ${classResponse.error}`);
  }, [classResponse]);

  return classResponse.loading === true ? (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading</Text>
    </SafeAreaView>
  ) : classResponse.error !== undefined ? (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Error</Text>
    </SafeAreaView>
  ) : (
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
              <Text style={{ color: Colors.andromeda }}>
                {/*tokenData !== undefined
                  ? ` ${tokenData[0].toUpperCase() + tokenData.slice(1)}`
                : ''*/}
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: Colors.sirius }}>
        <UpcomingClasses
          navigation={navigation}
          classes={classResponse.data.getAllClasses}
        />
        <FriendsClasses
          navigation={navigation}
          classes={classResponse.data.getAllClasses}
        />
        <RecommendedClasses
          navigation={navigation}
          classes={classResponse.data.getAllClasses}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
