import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Header } from '_molecules';
import { WorkoutGroup } from '_organisms';
import { plusImg, avatarImg, notifDarkBttnImg } from '_assets';
import styles from './styles';
import { Spacing, Typography, Colors, Icons } from '_styles';
import { GraphQLClient } from '_services';
import { GetGroup } from '../../../utils/backendServices/groupsService';

const GroupsHomeScreen = ({ navigation }) => {
  const currentUserId = GraphQLClient.getCurrentUserId();

  GetGroupByUserId();
  const { groupData, groupLoading } = GetGroup('7pmdv8kd523n9b');
  //console.log(groupData);
  return (
    <View style={styles.container}>
      <View style={styles.horizontalPadding}>
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
        <Text
          style={{
            ...Typography.h1,
            color: Colors.aquarius,
            paddingTop: Spacing.smaller,
          }}>
          Your Workout Groups
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateGroupScreen');
          }}
          style={{ ...styles.flexRowContainer, marginTop: Spacing.base }}>
          <Image
            source={plusImg}
            style={{ ...Icons.smaller, marginRight: Spacing.small }}
          />
          <Text
            style={{
              ...Typography.h3,
              ...Typography.unbold,
              color: Colors.andromeda,
            }}>
            Create New Group
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.groupsContainer}>
        <WorkoutGroup groupData={groupData} navigation={navigation} />
        <WorkoutGroup groupData={groupData} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default GroupsHomeScreen;
