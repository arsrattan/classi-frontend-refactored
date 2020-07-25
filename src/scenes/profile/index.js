import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import {
  arrowBackDarkImg,
  shareImgDark,
  settingsImg,
  unregisterImg,
} from '_assets';
import { Typography, Icons, Spacing, Colors } from '_styles';
import { PopupMenu, MenuTile, ProfileImg, Dot, Button } from '_atoms';
import { MedHortClassCard, SmallHortClassCard, Header } from '_molecules';
import { FeedPost } from '_organisms';
import { postData } from '_utils';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: Spacing.base,
        }}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.white}
          text={
            <Text
              style={{
                ...Typography.p1,
                ...Typography.bold,
                color: Colors.aries,
              }}>
              Profile
            </Text>
          }
          leftIcon={arrowBackDarkImg}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
          rightIcon={settingsImg}
          onPressRightIconAlt={
            <PopupMenu
              icon={settingsImg}
              options={[
                <MenuTile
                  icon={unregisterImg}
                  text="Logout"
                  navigation={navigation}
                  screen="Login"
                />,
              ]}
            />
          }
        />
      </View>

      <ScrollView bounces={true}>
        <View style={styles.profileView}>
          <ProfileImg size="large" />
          <View style={{ paddingLeft: Spacing.base }}>
            <Text style={Typography.h2d1}>Name</Text>
            <Text style={Typography.p1d2}>Bio text</Text>
            <View style={styles.followContainer}>
              <Text style={[Typography.p1d2]}>143 followers</Text>
              <Dot color={Colors.aries} size="base" />
              <Text style={Typography.p1d2}>87 following</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                text="Edit profile"
                type="SecondaryRound"
                navigation={navigation}
                screen="EditProfile"
                style={{
                  paddingHorizontal: Spacing.large,
                  marginVertical: Spacing.smaller,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={[Typography.h3d1, { paddingBottom: Spacing.small }]}>
            Upcoming Classes
          </Text>
          <SmallHortClassCard />
          <SmallHortClassCard />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={[Typography.h3d1, { paddingBottom: Spacing.small }]}>
            Saved Classes
          </Text>
          <SmallHortClassCard />
          <SmallHortClassCard />
          <SmallHortClassCard />
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Show All Pressed');
            }}
            style={styles.showMoreButton}>
            <Text style={{ ...Typography.p1, color: Colors.andromeda }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={[Typography.h3d1, { paddingBottom: Spacing.small }]}>
            Class History
          </Text>
        </View>
        {postData.map((post) => {
          return (
            <View>
              <FeedPost
                allComments={false}
                post={post}
                navigation={navigation}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
