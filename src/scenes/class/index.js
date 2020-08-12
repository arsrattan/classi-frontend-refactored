import React, { useState, useEffect } from 'react';
import {
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
import moment from 'moment';
import styles from './styles';
import { Tag, ProfileImg, InputBox, Divider, Button } from '_atoms';
import { PostCommentTile, MultiProfileImg } from '_molecules';
import { arrowBackImg, shareImgLight, copyImg } from '_assets';
import { ClassNavigator } from '_navigations';
import { Colors, Typography, Spacing } from '_styles';
import { GraphQLClient } from '_services';
/*
import {
  GetUser,
  GetUserFollowers,
} from '../../utils/backendServices/usersService';
*/

const ClassScreen = ({ navigation, route }) => {
  const { classDetails, isWatching } = route.params;
  const { instructorUserId } = classDetails;
  const [instructor, setInstructor] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('Select a date');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [scheduledTime, setScheduledTime] = useState(new Date());
  const [apiLoading, setApiLoading] = useState(false);

  /*
  const { data, loading } = GetUser(classDetails.instructorUserId);
  const { followersData, followersLoading } = GetUserFollowers(
    classDetails.instructorUserId,
  );
  */

  //console.log(classDetails);
  //const date = new Date(classDetails.scheduledTime);
  //const month = date.toLocaleString('default', { month: 'short' });

  const onShowDatePicker = () => {
    const newStatus = !showDatePicker;
    setShowDatePicker(newStatus);
  };

  // moment('05-17-2018 11:40 PM', 'MM-DD-YYYY hh:mm A')
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

  useEffect(() => {
    const fetchInstructor = async () => {
      const { data, error, loading } = await GraphQLClient.queryUserById(
        instructorUserId,
      );
      setInstructor(data);
    };

    const fetchFollowers = async () => {
      const { data, error, loading } = await GraphQLClient.queryFollowersById(
        instructorUserId,
      );
      setFollowers(data);
    };

    setApiLoading(true);
    fetchInstructor();
    fetchFollowers();
    setApiLoading(false);
  }, [instructorUserId]);

  const onRegisterClick = async (classId, userId, scheduledTime) => {
    const { register, data } = await GraphQLClient.registerForClass(
      classId,
      userId,
      scheduledTime,
    );
    console.log(`register: ${register}`);
    console.log(`data: ${data}`);
  };

  if (!apiLoading) {
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
            {/*<View style={styles.classTimeContainer}> <View style={styles.classTime}>
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
              </View> 
            </View>*/}
            <View style={styles.schedulerTimeContainer}>
              <TouchableOpacity
                onPress={onShowDatePicker}
                style={styles.scheduleTimeInput}>
                <Text style={Typography.p1d2}>
                  {scheduledDate !== 'Select a date'
                    ? scheduledDate.format('LL')
                    : scheduledDate}
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
                onPress={() => {
                  let combinedTimeString = `${
                    scheduledDate.month() + 1
                  }-${scheduledDate.date()}-${scheduledDate.year()} ${scheduledTime.getHours()}:${scheduledTime.getMinutes()}`;
                  let combinedTime = moment(
                    combinedTimeString,
                    'MM-DD-YYYY HH:mm',
                  );
                  console.log(combinedTime.format('LLLL'));
                  /*onRegisterClick(
                    GraphQLClient.getCurrentUserId,
                    classDetails.classId,
                    combinedTime,
                  );
                  navigation.navigate('Registered');*/
                }}
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
                      {followers[0] == null
                        ? ''
                        : followers.length + 'followers'}
                    </Text>
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
