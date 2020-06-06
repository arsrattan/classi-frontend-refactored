import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import styles from './styles';
import {
  notifDarkBttnImg,
  writePostBttnImg,
  celebrateEmojiImg,
  recorderEmojiImg,
} from '_assets';
import {postData} from '_utils';
import {Avatar} from '_atoms';
import {RecommendedUsers, Header} from '_molecules';
import {FeedPost} from '_organisms';

const FeedScreen = ({navigation}) => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: '#F4F5F6',
    }}>
    {StatusBar.setBarStyle('dark-content', true)}

    <Header
      navigation={navigation}
      headerStyle="light"
      text=""
      accentText=""
      writePost={true}
    />

    {/* Workout stats section */}
    <View style={styles.statsContainer}>
      <View style={styles.statDetailContainer}>
        <View style={styles.iconContainer}>
          <Image source={celebrateEmojiImg} />
        </View>
        <View style={{paddingLeft: 10}}>
          <Text style={styles.classCount}>200</Text>
          <Text style={styles.classInfoText}>Classes Completed Today</Text>
        </View>
      </View>
      <View style={styles.statDetailContainer}>
        <View style={styles.iconContainer}>
          <Image source={recorderEmojiImg} />
        </View>
        <View style={{paddingLeft: 10}}>
          <Text style={styles.classCount}>867</Text>
          <Text style={styles.classInfoText}>Taking a Class Right Now</Text>
        </View>
      </View>
    </View>

    {/* Recommended people to follow */}
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Recommend People to Follow</Text>
      <RecommendedUsers />
    </View>

    {/* Posts on your feed */}
    <View>
      <Text style={styles.heading}>Your Feed</Text>
      {postData.map((post) => {
        return (
          <View>
            <FeedPost allComments={false} post={post} navigation={navigation} />
          </View>
        );
      })}
    </View>
  </ScrollView>
);

export default FeedScreen;
