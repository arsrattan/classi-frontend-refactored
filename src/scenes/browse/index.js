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

const BrowseScreen = ({navigation}) => {
  const [pressFr, setPressFr] = useState(false);
  const [pressSr, setPressSr] = useState(false);
  const [visible, setVisible] = useState(false);

  const buttonFr = [
    {
      id: 0,
      filter: 'Strength Training',
      icone: <Image source={strengthImg} style={styles.iconNormal} />,
    },
    {
      id: 1,
      filter: 'HIIT',
      icone: <Image source={girlImg} style={styles.iconNormal} />,
    },
    {
      id: 2,
      filter: 'Meditation',
      icone: <Image source={mediatorImg} style={styles.iconNormal} />,
    },
  ];

  const buttonSr = [
    {
      id: 3,
      filter: 'Full Body',
      icone: <Image source={yogaImg} style={styles.iconNormal} />,
    },
    {
      id: 4,
      filter: 'Cardio',
      icone: <Image source={cardioImg} style={styles.iconNormal} />,
    },
    {
      id: 5,
      filter: 'Yoga',
      icone: <Image source={yogaImg} style={styles.iconNormal} />,
    },
  ];

  return (
    <ScrollView style={styles.browseContainer}>
      <Header
        navigation={navigation}
        headerStyle="light"
        text=""
        accentText=""
        writePost={false}
      />
      <Modal deviceWidth={Platform.OS === 'ios'} isVisible={visible}>
        <FilterModal setVisible={setVisible} navigation={navigation} />
      </Modal>
      <Text style={styles.browseHeaderText}>Find a Class</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 16,
          justifyContent: 'space-between',
        }}>
        <View style={styles.searchContainer}>
          <Image height={18} width={18} source={searchImg} />
          <TextInput
            placeholderTextColor="#B0B7C4"
            style={{paddingLeft: 11}}
            placeholder="Search classes by name"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
          style={styles.filterBtn}>
          <Image source={filterImg} />
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
              <View style={{marginRight: 10}}>{item.icone}</View>
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
              <View style={{marginRight: 10}}>{item.icone}</View>
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
      <Text style={styles.popularClassText}>Popular Classes</Text>
      {createClassCards(classesMockData, navigation)}
      <Text style={styles.allClassText}>All Classes</Text>
      {createClassCards(classesMockData, navigation)}
    </ScrollView>
  );
};

export default BrowseScreen;
