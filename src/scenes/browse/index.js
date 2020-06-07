import React, {useState} from 'react';
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
import {InputBox} from '_atoms';
import {Header, ClassList} from '_molecules';
import {FilterModal} from '_organisms';
import {
  strengthImg,
  girlImg,
  mediatorImg,
  yogaImg,
  cardioImg,
  searchImg,
  filterImg,
} from '_assets';
import {classesMockData, createClassCards} from '_utils';
import {Spacing} from '_styles';

const BrowseScreen = ({navigation}) => {
  const [pressFr, setPressFr] = useState(false);
  const [pressSr, setPressSr] = useState(false);
  const [visible, setVisible] = useState(false);

  const buttonFr = [
    {
      id: 0,
      filter: 'Strength Training',
      icon: <Image source={strengthImg} style={styles.iconNormal} />,
    },
    {
      id: 1,
      filter: 'HIIT',
      icon: <Image source={girlImg} style={styles.iconNormal} />,
    },
    {
      id: 2,
      filter: 'Meditation',
      icon: <Image source={mediatorImg} style={styles.iconNormal} />,
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

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerPadding}>
        <Header
          navigation={navigation}
          headerStyle="light"
          text=""
          accentText=""
          writePost={false}
        />
      </View>
      <ScrollView style={styles.browseContainer}>
        <Modal deviceWidth={Platform.OS === 'ios'} isVisible={visible}>
          <FilterModal setVisible={setVisible} navigation={navigation} />
        </Modal>
        <Text style={styles.browseHeaderText}>Find a Class</Text>
        <View style={[styles.searchAndFilterContainer, styles.rightPadding]}>
          <InputBox
            placeholderText={'Search classes by name'}
            icon={searchImg}
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
          style={{marginTop: 18}}
          data={buttonFr}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setPressFr(!pressFr);
                }}
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: pressFr && !index ? '#F86A6A' : '#fff',
                  },
                ]}>
                <View style={{marginRight: 10}}>{item.icon}</View>
                <Text
                  style={[
                    styles.filterChipText,
                    {
                      color: pressFr && !index ? '#fff' : '#102A43',
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
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setPressSr(!pressSr);
                }}
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: pressSr && !index ? '#F86A6A' : '#fff',
                  },
                ]}>
                <View style={{marginRight: 10}}>{item.icon}</View>
                <Text
                  style={[
                    styles.filterChipText,
                    {
                      color: pressSr && !index ? '#fff' : '#102A43',
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
        <Text style={[styles.h3d2, {paddingTop: Spacing.small}]}>
          Popular Classes
        </Text>
        {createClassCards(classesMockData, navigation)}
        <Text style={styles.h3d2}>All Classes</Text>
        {createClassCards(classesMockData, navigation)}
      </ScrollView>
    </View>
  );
};

export default BrowseScreen;
