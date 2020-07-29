import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  FlatList,
} from 'react-native';
import {
  celebrateEmojiImg,
  recorderEmojiImg,
  avatarImg,
  notifDarkBttnImg,
} from '_assets';
import { Header, RecommendedUsers } from '_molecules';
import { FeedPost } from '_organisms';
import styles from './styles';
import { UsersService, PostsService } from '_utils';
import { GraphQLClient } from '_services';

//import {GetAllPosts} from '../../utils/backendServices/postsService';
//import {GetAllUsers} from '../../utils/backendServices/usersService';
import { Spacing, Icons, Typography, Colors } from '_styles';

const FeedScreen = ({ navigation }) => {
  const [postData, setPostData] = useState({});
  //const { allUsersData, allUsersLoading } = UsersService.GetAllUsers();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error, loading } = await GraphQLClient.queryPostsById();
      //setPostData(data);
      setPostData({ data: data, error: error, loading: loading });
    };

    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerAndStatsContainer}>
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
          writePost={true}
        />
      </View>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.headerAndStatsContainer}>
          {/* Workout stats section
          
//left classes completed this week
//right total classes completed          
          */}

          <View style={styles.statsContainer}>
            <View style={styles.statDetailContainer}>
              <View style={styles.statNumContainer}>
                <View style={styles.iconContainer}>
                  <Image source={celebrateEmojiImg} style={Icons.small} />
                </View>
                <Text style={{ ...Typography.h1, color: Colors.white }}>3</Text>
              </View>
              <Text style={[Typography.p1white, { flexWrap: 'wrap' }]}>
                Classes you completed this week
              </Text>
            </View>
            <View style={styles.statDetailContainer}>
              <View style={styles.statNumContainer}>
                <View style={styles.iconContainer}>
                  <Image source={recorderEmojiImg} style={Icons.small} />
                </View>
                <Text style={{ ...Typography.h1, color: Colors.white }}>
                  32
                </Text>
              </View>
              <Text
                style={{
                  ...Typography.p1,
                  color: Colors.white,
                  flexWrap: 'wrap',
                }}>
                Total classes completed
              </Text>
            </View>
          </View>
          <View style={styles.backgroundStatContainer} />
        </View>
        {/* Recommended people to follow */}
        <View style={styles.headerMargin}>
          <Text style={Typography.h3d1}>Recommended Users</Text>
        </View>
        {/*<RecommendedUsers users={allUsersData} />*/}
        {/* Posts on your feed */}
        <View style={styles.headerMargin}>
          <Text style={Typography.h2d1}>Your Feed</Text>
        </View>
        <FlatList
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          data={postData.data}
          horizontal={false}
          renderItem={({ item }) => (
            <FeedPost allComments={false} post={item} navigation={navigation} />
          )}
          keyExtractor={(item) => {
            item.postId;
          }}
        />
      </ScrollView>
    </View>
  );
};

export default FeedScreen;
