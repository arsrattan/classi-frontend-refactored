import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {
  Avatar,
  FollowButton,
  Tag,
  ProfileImg,
  Dot,
  InputBox,
  SquareButton,
} from '_atoms';
import {PostCommentTile} from '_molecules';
import {
  arrowBackImg,
  shareImgLight,
  calendarImg,
  clockImg,
  copyImg,
  checkMarkImg,
  sendCommentImg,
} from '_assets';
import {ClassNavigator} from '_navigations';
import {Colors, Typography} from '_styles';
import {GetUser, GetUserFollowers} from '../../utils/backendServices/usersService';

const ClassScreen = ({navigation, route}) => {
  const {classDetails, isWatching} = route.params;
  const {data, loading} = GetUser(classDetails.instructorUserId);
  const {followersData, followersLoading} = GetUserFollowers(classDetails.instructorUserId);
  const date = new Date(parseInt(classDetails.scheduledTime));
  const month = date.toLocaleString('default', {month: 'short'});
  if (!loading && !followersLoading) {
    const comments = classDetails.comments == null ? [] : classDetails.comments;
    return (
      <ScrollView bounces={false} style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <ImageBackground
            resizeMode="cover"
            style={styles.classImage}
            source={{
              uri: classDetails.class_image_url,
            }}>
            <View style={styles.onImageContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Image source={arrowBackImg} style={styles.iconNormal} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={shareImgLight} style={styles.iconNormal} />
              </TouchableOpacity>
            </View>
            <View style={styles.tagContainer}>
              <Tag text={classDetails.difficulty} color={Colors.lightBlue} />
            </View>
          </ImageBackground>
          <View style={styles.classMetadataContainer}>
            <Text style={styles.h1d1}>{classDetails.className}</Text>
            <Text
              style={[
                Typography.p1d2,
              ]}>{`by ${classDetails.instructorUserId}`}</Text>
            <View style={styles.classTimeContainer}> 
              {/* <View style={styles.classTime}>
                <Image source={calendarImg} style={styles.iconSpace} />
                <Text style={Typography.p1d2}>
                  {date.getDate()} {month} {date.getFullYear()}
                </Text>
              </View>
              <View style={styles.classTime}>
                <Image source={clockImg} style={styles.iconSpace} />
                <Text style={Typography.p1d2}>
                  {date.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </View> */}
              {/* <View style={styles.classTime}>
                <Dot color={Colors.livePink} size="large" />
                <Text style={styles.liveNowText}>Live Now</Text>
              </View> */}
            </View>
            <View style={styles.registeredUserView}>
              <ProfileImg size="small" />
              <ProfileImg size="small" />
              <ProfileImg size="small" />
              <Text style={Typography.p1d2}>
                {'Duration: ' + classDetails.expectedDuration + ' minutes'}
              </Text>
            </View>
            {isWatching ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Completed', {
                    instructorUserId: classDetails.instructorUserId,
                  });
                }}
                style={styles.registerButton}>
                <Text style={styles.registerNowText}>Watch Now</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Registered');
                }}
                style={styles.registerButton}>
                <Text style={styles.p1white}>Register Now</Text>
              </TouchableOpacity>
            )}
            {isWatching && (
              <TouchableOpacity style={styles.copyLinkButton}>
                <Text style={styles.copyLinkText}>
                  Copy link to watch in desktop
                </Text>
                <Image source={copyImg} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.classDescriptionContainer}>
            <ClassNavigator classDetails={classDetails} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={Typography.h3d1}>Instructor</Text>
            <View style={styles.instructorViewContainer}>
              <View style={styles.containerFlexRow}>
                <ProfileImg userProfileImg={classDetails.channel_thumbnail_url} size="small" />
                <View style={styles.instructorNameContainer}>
                  <Text style={[Typography.p1d2]}>
                    {classDetails.instructorUserId}
                  </Text>
                  <View style={styles.containerFlexRow}>
                    {/* <Text style={Typography.p2d2}>About me</Text>
                    <Dot color={Colors.aquarius} size="base" /> */}
                    <Text style={Typography.p2d2}>{data[0] == null ? '' : followersData.length + 'followers'}</Text>
                  </View>
                </View>
              </View>
              {/* <FollowButton followedUser={classDetails.instructorUserId} isUnfollow={false} /> */}
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={Typography.h3d1}>Comments ({comments.length})</Text>
            <View style={styles.replyCommentContainer}>
              <ProfileImg size="small" />
              <View style={styles.padding} />
              <InputBox placeholderText="Write a comment" />
            </View>
            <View style={styles.commentsContainer}>
              {comments.map((comment) => (
                <PostCommentTile comment={comment} />
              ))}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  } else {
    return null;
  }
};

export default ClassScreen;
