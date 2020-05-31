import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { notifDarkBttnImg, writePostBttnImg, celebrateEmojiImg, recorderEmojiImg } from '_assets';
import { postData } from '_utils';
import { Avatar } from '_atoms';
import { RecommendedUsers } from '_molecules';
import { FeedPost } from '_organisms';

const FeedScreen = ({ navigation }) => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: '#F4F5F6',
      paddingTop: Platform.OS === 'ios' ? 30 : 0,
    }}
  >
    {StatusBar.setBarStyle('dark-content', true)}

    { /* Header for feeds screen, include "write blog" post */ }
    <View style={styles.feedHeader}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Avatar />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          width: '20%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity>
          <Image source={writePostBttnImg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications')
          }}
        >
          <Image source={notifDarkBttnImg} />
        </TouchableOpacity>
      </View>
    </View>

    { /* Workout stats section */ }
    <View style={styles.statsContainer}>
      <View style={styles.statDetailContainer}>
        <View style={styles.iconContainer}>
          <Image source={celebrateEmojiImg} />
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.classCount}>200</Text>
          <Text style={styles.classInfoText}>Classes Completed Today</Text>
        </View>
      </View>
      <View style={styles.statDetailContainer}>
        <View style={styles.iconContainer}>
          <Image source={recorderEmojiImg} />
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.classCount}>867</Text>
          <Text style={styles.classInfoText}>Taking a Class Right Now</Text>
        </View>
      </View>
    </View>

    { /* Recommended people to follow */ }
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>Recommend People to Follow</Text>
      <RecommendedUsers />
    </View>

    { /* Posts on your feed */ }
    <View>
      <Text style={styles.heading}>Your Feed</Text>
      {postData.map((post) => {
        return (
          <View>
            <FeedPost showComment={true} post={post}/>
          </View>
        )
      })}
    </View>
  </ScrollView>
)

export default FeedScreen;