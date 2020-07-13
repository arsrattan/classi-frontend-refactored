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
import {Header, SearchUsers} from '_molecules';
import {arrowBackDarkImg} from '_assets';
import styles from './styles';
import {Spacing, Typography, Colors, Icons} from '_styles';

const GroupMembersScreen = ({navigation}) => {
  const [searchFriendName, setSearchName] = useState('');
  const handleSearchValue = (text) => {
    console.log(text);
    setSearchName(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.white}
          text={
            <Text style={{...Typography.p1d2, ...Typography.bold}}>
              Group Members
            </Text>
          }
          leftIcon={arrowBackDarkImg}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
        />
      </View>
      <SearchUsers
        navigation={navigation}
        title="Add Members"
        searchValue={searchFriendName}
        handleSearchValue={handleSearchValue}
      />
    </View>
  );
};

export default GroupMembersScreen;
