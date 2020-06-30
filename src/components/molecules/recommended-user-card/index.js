import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {recommendedUsersData} from '_utils';
import {FollowButton, ProfileImg} from '_atoms';

const RecommendedUsers = () => {
  return (
    <View style={styles.followCardContainer}>
      <FlatList
        contentContainerStyle={{alignSelf: 'flex-end'}}
        data={recommendedUsersData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.feedCard]}>
              <ProfileImg size="medium" styles={styles.feedCardImage} />
              <Text style={styles.instructorName}>{item.instructor}</Text>
              <Text style={styles.tagAndText}>{item.tag}</Text>
              <View style={styles.rowContainer}>
                <Text style={[styles.boldCount]}>{item.followers}</Text>
                <Text style={styles.tagAndText}>{` of Followers`}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={[styles.boldCount]}>{item.numOfClass}</Text>
                <Text style={styles.tagAndText}>{` of Classes`}</Text>
              </View>
              <View style={styles.followButtonContainer}>
                <FollowButton followedUser={item.instructor} isUnfollow={false} follow/>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default RecommendedUsers;
