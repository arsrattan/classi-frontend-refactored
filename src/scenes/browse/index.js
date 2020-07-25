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
import { createClassCards } from '_utils';
import { GetAllClasses } from '../../utils/backendServices/classService';
import { Spacing, Colors } from '_styles';
import { GraphQLClient } from '_services';

const BrowseScreen = ({ navigation }) => {
  const { data, loading } = GetAllClasses();
  const [pressFr, setPressFr] = useState(-1);
  const [pressSr, setPressSr] = useState(-1);
  const [filterVal, setFilterVal] = useState('');
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({ className: '' });
  const [classes, setClasses] = useState([]);

  const filterClassData = function (textFilter, classType, classData) {
    return classData == null
      ? []
      : classData.filter(function (c) {
          return (
            c.classType.indexOf(classType) != -1 &&
            c.classType.indexOf(textFilter) != -1
          );
        });
  };

  const handleChange = (newValue, name) => {
    setValues((values) => ({ ...values, [name]: newValue }));
  };

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

  useEffect(() => {
    const fetchClasses = async () => {
      const { data, error, loading } = await GraphQLClient.queryAllClasses();
      setClasses(data);
    };

    fetchClasses();
  }, []);

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
            value={values.className || ''}
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
                <View style={{ marginRight: 10 }}>{item.icon}</View>
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
          data={buttonSr}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item, index }) => {
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
                <View style={{ marginRight: 10 }}>{item.icon}</View>
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
        <Text style={[styles.h3d2, { paddingTop: Spacing.small }]}>
          Popular Classes
        </Text>
        {createClassCards(
          filterClassData(values.className, filterVal, data),
          navigation,
        )}
        <Text style={styles.h3d2}>All Classes</Text>
        {createClassCards(
          filterClassData(values.className, filterVal, data),
          navigation,
        )}
      </ScrollView>
    </View>
  );
};

export default BrowseScreen;
