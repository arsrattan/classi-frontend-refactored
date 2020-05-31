import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { Card } from '_atoms';
import { Header, ClassList } from '_molecules';
import { FilterModal } from '_organisms';
import { strengthImg, girlImg, mediatorImg, yogaImg, cardioImg, searchImg, filterImg } from '_assets';

const BrowseScreen = (props) => {
  const [pressFr, setPressFr] = useState(false)
  const [pressSr, setPressSr] = useState(false)
  const [visible, setVisible] = useState(false)

  const buttonFr = [
    {
      id: 0,
      filter: 'Strength Training',
      icone: <Image source={strengthImg} />,
    },
    {
      id: 1,
      filter: 'Cooking',
      icone: <Image source={girlImg} />,
    },
    {
      id: 2,
      filter: 'Meditation',
      icone: <Image source={mediatorImg} />,
    },
  ];

  const buttonSr = [
    {
      id: 3,
      filter: 'Full Body',
      icone: <Image source={yogaImg} />,
    },
    {
      id: 4,
      filter: 'Cardio',
      icone: <Image source={cardioImg} />,
    },
    {
      id: 5,
      filter: 'Yoga',
      icone: <Image source={yogaImg} />,
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F4F5F6',
        paddingTop: 20,
        paddingHorizontal: 16,
      }}
    >
      <Header {...props} />
      <Modal deviceWidth={Platform.OS === 'ios'} isVisible={visible}>
        <FilterModal setVisible={setVisible} {...props} />
      </Modal>
      <Text style={styles.findClassText}>Find a Class</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 16,
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.searchContainer}>
          <Image height={18} width={18} source={searchImg} />
          <TextInput
            placeholderTextColor='#B0B7C4'
            style={{ paddingLeft: 11 }}
            placeholder='Search classes by name'
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            // props.navigation.navigate('FilterModal')
            setVisible(true)
          }}
          style={styles.filterBtn}
        >
          <Image source={filterImg} />
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
                setPressFr(!pressFr)
              }}
              style={[
                styles.filterChip,
                {
                  backgroundColor: pressFr && !index ? '#F86A6A' : '#fff',
                },
              ]}
            >
              <View style={{ marginRight: 10 }}>{item.icone}</View>
              <Text
                style={[
                  styles.filterChipText,
                  {
                    color: pressFr && !index ? '#fff' : '#102A43',
                  },
                ]}
              >
                {item.filter}
              </Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => {
          item.id
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
                setPressSr(!pressSr)
              }}
              style={[
                styles.filterChip,
                {
                  backgroundColor: pressSr && !index ? '#F86A6A' : '#fff',
                },
              ]}
            >
              <View style={{ marginRight: 10 }}>{item.icone}</View>
              <Text
                style={[
                  styles.filterChipText,
                  {
                    color: pressSr && !index ? '#fff' : '#102A43',
                  },
                ]}
              >
                {item.filter}
              </Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => {
          item.id
        }}
      />
      <Text style={styles.popularClassText}>Popular Classes</Text>
      <Card popular={true} showLive={false} {...props} />
      <Text style={styles.allClassText}>All Classes</Text>
      <ClassList {...props} />
    </ScrollView>
  )
}

export default BrowseScreen;
