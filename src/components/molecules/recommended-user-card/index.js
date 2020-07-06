import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {FollowButton, ProfileImg} from '_atoms';
import {GetUser, GetUserFollowers} from '../../../utils/backendServices/usersService';


const RecommendedUsers = ({users}) => {
  var generateFollowerCount = function(users) {
    for(let user of users){
      const {followersData} = GetUserFollowers(user.userId);
      user.followers = followersData.length;
    }
  };
  generateFollowerCount(users);
  return (
    <View style={styles.followCardContainer}>
      <FlatList
        contentContainerStyle={{alignSelf: 'flex-end'}}
        data={users}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.feedCard]}>
              <ProfileImg userProfileImg={item.s3url} size="medium" styles={styles.feedCardImage} />
              <Text style={styles.instructorName}>{item.firstName + ' ' + item.lastName}</Text>
              <View style={styles.rowContainer}>
                <Text style={[styles.boldCount]}>{item.followers}</Text>
                <Text style={styles.tagAndText}>{` followers`}</Text>
              </View>
              {/* <View style={styles.rowContainer}>
                <Text style={[styles.boldCount]}>{'item.numOfClass'}</Text>
                <Text style={styles.tagAndText}>{` of Classes`}</Text>
              </View> */}
              <View style={styles.followButtonContainer}>
                <FollowButton followedUser={'item.instructor'} isUnfollow={false} follow/>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => {
          return item.userId;
        }}
      />
    </View>
  );
};

export default RecommendedUsers;
