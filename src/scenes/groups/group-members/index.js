import React, { useState } from 'react';
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
import { Header, SearchUsers, InviteTile } from '_molecules';
import { arrowBackDarkImg, copyImg } from '_assets';
import styles from './styles';
import { Spacing, Typography, Colors, Icons } from '_styles';

const GroupMembersScreen = ({ navigation }) => {
  const [searchFriendName, setSearchName] = useState('');
  const handleSearchValue = (text) => {
    setSearchName(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.white}
          text={
            <Text style={{ ...Typography.p1d2, ...Typography.bold }}>
              Group Members
            </Text>
          }
          leftIcon={arrowBackDarkImg}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.sectionContainerPadded}>
          <Text style={Typography.h3d1}>Group Members</Text>
          <InviteTile name="Derek" />
        </View>
        <View style={styles.sectionContainerPadded}>
          <Text style={Typography.h3d1}>Share Group Invite</Text>
          <TouchableOpacity
            style={styles.copyLinkContainer}
            onPress={() => {
              Clipboard.setString('classi.live/link/path');
            }}>
            <Text
              style={{
                ...Typography.p1,
                color: Colors.andromeda,
              }}>
              classi.live/link/path
            </Text>
            <Image style={Icons.small} source={copyImg} />
          </TouchableOpacity>
        </View>
        <SearchUsers
          navigation={navigation}
          title="Add Members"
          searchValue={searchFriendName}
          handleSearchValue={handleSearchValue}
        />
      </ScrollView>
    </View>
  );
};

export default GroupMembersScreen;
