import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {recommendedUsersData} from '_utils';
import {fontFamily} from '_assets';
import {FollowButton, ProfileImg} from '_atoms';

const RecommendedUsers = () => {
  return (
    <View style={{flex: 1, height: 240}}>
      <FlatList
        contentContainerStyle={{alignSelf: 'flex-end'}}
        data={recommendedUsersData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.feedCard,
                {
                  height: item.upcoming === true ? 211 : 187,
                },
              ]}>
              <ProfileImg size="medium" styles={styles.feedCardImage} />
              {/*<Image
                style={styles.feedCardImage}
                source={{ uri: 'https://placebeard.it/640x360' }}
              />*/}
              <Text style={styles.instructorName}>{item.instructor}</Text>
              <Text style={styles.tagAndText}>{item.tag}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.boldCount, {paddingTop: 4}]}>
                  {item.followers}
                </Text>
                <Text style={styles.tagAndText}>{` of Followers`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.boldCount, {paddingTop: 4}]}>
                  {item.numOfClass}
                </Text>
                <Text style={styles.tagAndText}>{` of Classes`}</Text>
              </View>
              <FollowButton />
              {/* Conditional formating for card bottom upcoimg class */}
              {item.upcoming === true && (
                <View style={styles.upcomingClassContainer}>
                  <Text style={styles.boldCount}>3</Text>
                  <Text style={[styles.tagAndText, {paddingTop: 0}]}>
                    {' '}
                    {` upcoming classes`}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => {
          return item.id;
        }}
      />
    </View>
  );
};

export default RecommendedUsers;
