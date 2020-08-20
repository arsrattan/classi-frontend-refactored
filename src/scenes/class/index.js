import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import { Tag, ProfileImg, InputBox, Divider, Button } from '_atoms';
import { PostCommentTile, MultiProfileImg } from '_molecules';
import { arrowBackImg, shareImgLight, copyImg } from '_assets';
import { ClassNavigator } from '_navigations';
import { Colors, Typography, Spacing } from '_styles';
import { UsersService } from '_utils';
import { useMutation, useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';
import moment from 'moment';
import { classesOverview } from '_mocks';
import { ClassService, Queries } from '_utils';

const ClassScreen = ({ navigation, route }) => {
  const { classDetails, isWatching } = route.params;
  const { instructorUserId } = classDetails;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('Select a date');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [scheduledTime, setScheduledTime] = useState(new Date());

  const instructorResponse = useQuery(Queries.GetSpecificUser, {
    variables: { userId: classDetails.instructorUserId },
  });

  const userId = UsersService.GetCurrentUserId();

  const instructorFollowersResponse = useQuery(Queries.GetUserFollowers, {
    variables: { userId: classDetails.instructorUserId },
  });

  // call refetch() after a user has registered for the class to display the new UI
  const registeredClassResponse = useQuery(Queries.GetRegistered, {
    variables: { userId: userId },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    console.log(
      registeredClassResponse.loading !== true
        ? `registered status: ${JSON.stringify(
            registeredClassResponse.data.getRegistrationsForUser,
          )}`
        : '',
    );
    if (instructorResponse.error)
      console.log(`instructor error: ${instructorResponse.error}`);
    if (instructorFollowersResponse.error)
      console.log(`followers error: ${instructorFollowersResponse}`);
    if (registeredClassResponse.error)
      console.log(`get registered error: ${registeredClassResponse}`);
  }, [
    instructorResponse,
    instructorFollowersResponse,
    registeredClassResponse,
  ]);

  const onShowDatePicker = () => {
    const newStatus = !showDatePicker;
    setShowDatePicker(newStatus);
  };

  const onChangeDate = (selectedDate) => {
    setScheduledDate(selectedDate);
    setShowDatePicker(false);
  };

  const onShowTimePicker = () => {
    const newStatus = !showTimePicker;
    setShowTimePicker(newStatus);
  };

  const onChangeTime = (event, selectedTime) => {
    setScheduledTime(selectedTime);
    setTimeout(() => {
      setShowTimePicker(false);
    }, 0);
  };

  const REGISTER_CLASS = gql`
    mutation RegisterForClass(
      $userId: String!
      $classId: String!
      $scheduledTime: Float!
    ) {
      registerForClass(
        userId: $userId
        classId: $classId
        scheduledTime: $scheduledTime
      )
    }
  `;

  const [
    registerClass,
    { registerData, registerLoading, registerError },
  ] = useMutation(REGISTER_CLASS);

  const onRegisterForClass = () => {
    let combinedTimeString = `${
      scheduledDate.month() + 1
    }-${scheduledDate.date()}-${scheduledDate.year()} ${scheduledTime.getHours()}:${scheduledTime.getMinutes()}`;
    let combinedTime = moment(combinedTimeString, 'MM-DD-YYYY HH:mm');
    console.log(combinedTime.format('LLLL'));

    registerClass({
      variables: {
        userId: userId,
        classId: classDetails.classId,
        scheduledTime: combinedTime.unix(),
      },
    })
      .then(({ data }) => {
        setRegisteredSuccess(true);
        navigation.navigate('Registered');
      })
      .catch((e) => {
        console.log(e);
        setRegisteredSuccess(false);
      });
  };

  return instructorResponse.loading === true ||
    instructorFollowersResponse.loading === true ||
    registeredClassResponse.loading === true ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : instructorResponse.error === true ||
    instructorFollowersResponse.error === true ||
    registeredClassResponse.error === true ? (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Error</Text>
    </SafeAreaView>
  ) : (
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
          </View>
          <View style={styles.schedulerTimeContainer}>
            <TouchableOpacity
              onPress={onShowDatePicker}
              style={styles.scheduleTimeInput}>
              <Text style={Typography.p1d2}>
                {scheduledDate !== 'Select a date'
                  ? scheduledDate.format('LL')
                  : 'Select a date'}
              </Text>
              <Divider
                color={Colors.grey}
                style={{ marginVertical: Spacing.smallest }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onShowTimePicker}
              style={styles.scheduleTimeInput}>
              <Text style={Typography.p1d2}>
                {scheduledTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <Divider
                color={Colors.grey}
                style={{ marginVertical: Spacing.smallest }}
              />
            </TouchableOpacity>
          </View>
          {showDatePicker && <CalendarPicker onDateChange={onChangeDate} />}
          {showTimePicker && (
            <DateTimePicker
              value={scheduledTime}
              mode="time"
              onChange={onChangeTime}
              minuteInterval={15}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('InviteScreen', {
                /*
                  invitedList: inviteList,
                  addToList: addToList,*/
              });
            }}
            style={{ marginTop: Spacing.smallest }}>
            <Text style={Typography.p1d2}>Invite friends to join</Text>
            <Divider
              color={Colors.grey}
              style={{ marginVertical: Spacing.smallest }}
            />
          </TouchableOpacity>
          <MultiProfileImg
            userList={['Anmol', 'Malik', 'Arnim', 'Derek', 'Jake']}
            propStyles={{ marginTop: Spacing.smallest }}
          />
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
              onPress={onRegisterForClass}
              style={styles.registerButton}>
              <Text style={styles.p1white}>Register Now</Text>
            </TouchableOpacity>
          )}
          <Button
            text="Join Class Now"
            type="TertiaryRound"
            navigation={navigation}
            screen="ClassPlayer"
            onPressParams={{
              classVideoURL: 'test',
            }}
            style={{ marginTop: Spacing.smaller }}
          />
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
              <ProfileImg
                userProfileImg={classDetails.channel_thumbnail_url}
                size="small"
              />
              <View style={styles.instructorNameContainer}>
                <Text style={[Typography.p1d2]}>
                  {classDetails.instructorUserId}
                </Text>
                <View style={styles.containerFlexRow}>
                  {/* <Text style={Typography.p2d2}>About me</Text>
                    <Dot color={Colors.aquarius} size="base" /> */}
                  <Text style={Typography.p2d2}>
                    {instructorFollowersResponse.data.getUserFollowers !==
                    undefined
                      ? instructorFollowersResponse.data.getUserFollowers +
                        ' followers'
                      : ''}
                  </Text>
                </View>
              </View>
            </View>
            {/* <FollowButton followedUser={classDetails.instructorUserId} isUnfollow={false} /> */}
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={Typography.h3d1}>
            Comments (
            {classDetails.comments !== null
              ? classDetails.comments.length
              : '0'}
            )
          </Text>
          <View style={styles.replyCommentContainer}>
            <ProfileImg size="small" />
            <View style={styles.padding} />
            <InputBox placeholderText="Write a comment" />
          </View>
          <View style={styles.commentsContainer}>
            {classDetails.comments != null
              ? classDetails.comments.map((comment) => (
                  <PostCommentTile comment={comment} />
                ))
              : null}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ClassScreen;
