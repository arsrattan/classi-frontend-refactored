import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {celebrateEmojiImg, recorderEmojiImg} from '_assets';
import {Header, RecommendedUsers} from '_molecules';
import {FeedPost} from '_organisms';
import {Icons, Typography} from '_styles';
import styles from './styles';
import {GetAllPosts} from '../../utils/backendServices/postsService';
import {GetAllUsers} from '../../utils/backendServices/usersService';

const FeedScreen = ({navigation}) => {
  const {postsData, postsLoading} = GetAllPosts('userId');
  const {allUsersData, allUsersLoading} = GetAllUsers();
  return (
    <View style={{flex: 1}}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View style={styles.headerAndStatsContainer}>
        <Header
          navigation={navigation}
          headerStyle="light"
          text=""
          accentText=""
          writePost={true}
        />
      </View>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.headerAndStatsContainer}>
          {/* Workout stats section
          
          idk if we should include this in MVP
          
          */}

          {/* <View style={styles.statsContainer}>
            <View style={styles.statDetailContainer}>
              <View style={styles.iconContainer}>
                <Image source={celebrateEmojiImg} style={Icons.normal} />
              </View>
              <View style={styles.rightMargin} />
              <View style={styles.statTextContainer}>
                <Text style={styles.classCount}>200</Text>
                <Text style={[Typography.p1white, {flexWrap: 'wrap'}]}>
                  Classes Completed Today
                </Text>
              </View>
            </View>
            <View style={styles.statDetailContainer}>
              <View style={styles.iconContainer}>
                <Image source={recorderEmojiImg} style={Icons.normal} />
              </View>
              <View style={styles.rightMargin} />
              <View style={styles.statTextContainer}>
                <Text style={styles.classCount}>867</Text>
                <Text style={[Typography.p1white, {flexWrap: 'wrap'}]}>
                  Taking a Class Right Now
                </Text>
              </View>
            </View>
          </View> */}
        </View>
  
        {/* Recommended people to follow */}
        <View style={styles.headerMargin}>
          <Text style={Typography.h3d1}>Recommended Users</Text>
        </View>
        <RecommendedUsers users={allUsersData} />
  
        {/* Posts on your feed */}
        <View style={styles.headerMargin}>
          <Text style={Typography.h2d1}>Your Feed</Text>
        </View>
        {postsData.map((post) => {
          return (
            <View>
              <FeedPost allComments={false} post={post} navigation={navigation} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default FeedScreen;
