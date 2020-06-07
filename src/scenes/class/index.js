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
import {TextInput} from 'react-native-gesture-handler';
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

const ClassScreen = ({navigation, route}) => {
  const {classDetails, isWatching} = route.params;
  const {className, classBy, url} = classDetails;

  return (
    <ScrollView bounces={false} style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <ImageBackground
          resizeMode="cover"
          style={styles.classImage}
          source={{
            uri: url,
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
            <Tag text={'Beginner'} color={Colors.lightBlue} />
          </View>
        </ImageBackground>
        <View style={styles.classMetadataContainer}>
          <Text style={styles.h1d1}>{className}</Text>
          <Text style={[Typography.p1d2]}>{`by ${classBy}`}</Text>
          <View style={styles.classTimeContainer}>
            <View style={styles.classTime}>
              <Image source={calendarImg} style={styles.iconSpace} />
              <Text style={Typography.p1d2}>26 April 2020</Text>
            </View>
            <View style={styles.classTime}>
              <Image source={clockImg} style={styles.iconSpace} />
              <Text style={Typography.p1d2}>12:30</Text>
            </View>
            <View style={styles.classTime}>
              <Dot color={Colors.livePink} size="large" />
              <Text style={styles.liveNowText}>Live Now</Text>
            </View>
          </View>
          <View style={styles.registeredUserView}>
            <ProfileImg size="small" />
            <ProfileImg size="small" />
            <ProfileImg size="small" />
            <Text style={Typography.p1d2}>234 Users registered</Text>
          </View>
          {isWatching ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Completed', {classBy: classBy});
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
          <ClassNavigator />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={Typography.h3d1}>Instructor</Text>
          <View style={styles.instructorViewContainer}>
            <View style={styles.containerFlexRow}>
              <ProfileImg size="small" />
              <View style={styles.instructorNameContainer}>
                <Text style={[Typography.p1d2]}>Tafia Salsabila</Text>
                <View style={styles.containerFlexRow}>
                  <Text style={Typography.p2d2}>About me</Text>
                  <Dot color={Colors.aquarius} size="base" />
                  <Text style={Typography.p2d2}>12K followers</Text>
                </View>
              </View>
            </View>
            <FollowButton />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={Typography.h3d1}>Comments (1)</Text>
          <View style={styles.replyCommentContainer}>
            <ProfileImg size="small" />
            <View style={styles.padding} />
            <InputBox placeholderText="Write a comment" />
          </View>
          <View style={styles.commentsContainer}>
            <PostCommentTile />
            <PostCommentTile />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ClassScreen;
