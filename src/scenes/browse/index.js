import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { InputBox } from '_atoms';
import { Header, ClassList } from '_molecules';
import { FilterModal } from '_organisms';
import {
  strengthImg,
  girlImg,
  mediatorImg,
  yogaImg,
  cardioImg,
  searchImg,
  filterImg,
  avatarImg,
  notifDarkBttnImg,
} from '_assets';
import { createClassCards, ClassService } from '_utils';
import { GetAllClasses } from '../../utils/backendServices/classService';
import { Spacing, Colors } from '_styles';
//import { GraphQLClient } from '_services';

const BrowseScreen = ({ navigation }) => {
  const { data, loading } = GetAllClasses();

  const [filterChips, setFilterChips] = useState(new Map());

  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  //const [classes, setClasses] = useState([]);

  /* filters class data based off user inputs */
  const filterClassData = function (textFilter, classTypes, classData) {
    var filteredClassData = classData;
    if (classTypes.size !== 0) {
      var filteredClassData = classData.filter(function (c) {
        return Array.from(classTypes.values()).includes(c.classType);
      });
    }
    if (textFilter === '') {
      return filteredClassData;
    } else {
      var regexPattern = new RegExp(textFilter, 'i');
      return filteredClassData.filter(function (c) {
        return regexPattern.test(c.className);
      });
    }
  };

  const handleChange = (text) => {
    setSearchText(text);
  };

  const buttonFr = [
    {
      id: 1,
      filter: 'Strength',
      icon: <Image source={strengthImg} style={styles.iconNormal} />,
    },
    {
      id: 2,
      filter: 'HIIT',
      icon: <Image source={girlImg} style={styles.iconNormal} />,
    },
  ];

  /* ids of the 2nd row of filters has to be mutually exclusive from the ids in the first row */
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

  /*
  useEffect(() => {
    const fetchClasses = async () => {
      const { data, error, loading } = await GraphQLClient.queryAllClasses();
      setClasses(data);
    };

    fetchClasses();
  }, []);
  */

  const { classData, classLoading } = ClassService.GetAllClasses();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerPadding}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.grey}
          leftIcon={avatarImg}
          onPressLeftIcon={() => {
            navigation.navigate('Profile');
          }}
          rightIcon={notifDarkBttnImg}
          onPressRightIcon={() => {
            navigation.navigate('Notifications');
          }}
        />
      </View>

      <ScrollView style={styles.browseContainer}>
        <View style={{ paddingHorizontal: Spacing.base }}>
          <Modal deviceWidth={Platform.OS === 'ios'} isVisible={visible}>
            <FilterModal setVisible={setVisible} navigation={navigation} />
          </Modal>
          <Text
            style={{ ...styles.browseHeaderText, paddingTop: Spacing.smaller }}>
            Find a Class
          </Text>
          <View style={[styles.searchAndFilterContainer, styles.rightPadding]}>
            <InputBox
              placeholderText={'Search classes by name'}
              icon={searchImg}
              value={searchText}
              onChange={handleChange}
              name={'className'}
            />
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
              }}
              style={styles.filterBtn}>
              <Image source={filterImg} style={styles.iconNormal} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginTop: 18 }}
            data={buttonFr}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (!filterChips.has(item.id)) {
                      setFilterChips(
                        new Map(filterChips.set(item.id, item.filter)),
                      );
                    } else {
                      filterChips.delete(item.id);
                      setFilterChips(new Map(filterChips));
                    }
                  }}
                  style={[
                    styles.filterChip,
                    {
                      backgroundColor: filterChips.has(item.id)
                        ? '#F86A6A'
                        : '#fff',
                    },
                  ]}>
                  <View style={{ marginRight: 10 }}>{item.icon}</View>
                  <Text
                    style={[
                      styles.filterChipText,
                      {
                        color: filterChips.has(item.id) ? '#fff' : '#102A43',
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
            data={buttonSr}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (!filterChips.has(item.id)) {
                      setFilterChips(
                        new Map(filterChips.set(item.id, item.filter)),
                      );
                    } else {
                      filterChips.delete(item.id);
                      setFilterChips(new Map(filterChips));
                    }
                  }}
                  style={[
                    styles.filterChip,
                    {
                      backgroundColor: filterChips.has(item.id)
                        ? '#F86A6A'
                        : '#fff',
                    },
                  ]}>
                  <View style={{ marginRight: 10 }}>{item.icon}</View>
                  <Text
                    style={[
                      styles.filterChipText,
                      {
                        color: filterChips.has(item.id) ? '#fff' : '#102A43',
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
        </View>
        <Text
          style={[
            styles.h3d2,
            { paddingTop: Spacing.small, paddingLeft: Spacing.base },
          ]}>
          Popular Classes
        </Text>
        {createClassCards(
          filterClassData(searchText, filterChips, classData),
          navigation,
        )}
        <Text style={{ ...styles.h3d2, paddingLeft: Spacing.base }}>
          All Classes
        </Text>
        {createClassCards(
          filterClassData(searchText, filterChips, classData),
          navigation,
        )}
      </ScrollView>
    </View>
  );
};

export default BrowseScreen;
