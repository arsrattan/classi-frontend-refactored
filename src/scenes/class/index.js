import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import styles from './styles';
import {
  Avatar,
  FollowButton,
  Tag,
  ProfileImg,
  Dot,
  InputBox,
  SquareButton,
  InputField,
  Divider,
  Button,
} from '_atoms';
import {PostCommentTile, MultiProfileImg} from '_molecules';
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
import {Icons, Colors, Typography, Spacing} from '_styles';
import {
  GetUser,
  GetUserFollowers,
} from '../../utils/backendServices/usersService';

const ClassScreen = ({navigation, route}) => {
  const {classDetails, isLive} = route.params;
  const {data, loading} = GetUser(classDetails.instructorUserId);
  const {followersData, followersLoading} = GetUserFollowers(
    classDetails.instructorUserId,
  );
  const date = new Date(parseInt(classDetails.scheduledTime));
  const month = date.toLocaleString('default', {month: 'short'});

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('Select a date');

  const onShowDatePicker = () => {
    const newStatus = !showDatePicker;
    setShowDatePicker(newStatus);
  };

  const onChangeDate = (selectedDate) => {
    const currentDate = selectedDate;
    setScheduledDate(currentDate.format('LL'));
    setShowDatePicker(false);
  };

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [scheduledTime, setScheduledTime] = useState(new Date());

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

  /* These were used to keep track of who was added to a group, but that should just be a backend call
  const [inviteList, setInvitedList] = useState([]);

  const addToList = (name) => {
    const newInviteList = inviteList;
    newInviteList.push(name);
    setInvitedList(newInviteList);
  };
  */

  if (!loading && !followersLoading) {
    const comments = classDetails.comments == null ? [] : classDetails.comments;
    return (
      <ScrollView bounces={false} style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <ImageBackground
            resizeMode="cover"
            style={styles.classImage}
            source={{
              uri: classDetails.s3url,
            }}>
            <View style={styles.onImageContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
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

            {/* show the time a class is scheduled for, only show after a user is registered  
            <View style={styles.classTimeContainer}>
              <View style={styles.classTime}>
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
              </View>
              {/* code for incidicating a class is live. not relevant at MVP
              <View style={styles.classTime}>
                <Dot color={Colors.livePink} size="large" />
                <Text style={styles.liveNowText}>Live Now</Text>
              </View>
              
            </View>
              */}

            {/* code for showing number of registered users, not relevant at MVP
            <View style={styles.registeredUserView}>
              <ProfileImg size="small" />
              <ProfileImg size="small" />
              <ProfileImg size="small" />
              <Text style={Typography.p1d2}>
                {classDetails.registeredUsers == null
                  ? '0 users registered'
                  : classDetails.registeredUsers.length + 'users registered'}
              </Text>
            </View>
                */}
            <View style={styles.schedulerTimeContainer}>
              <TouchableOpacity
                onPress={onShowDatePicker}
                style={styles.scheduleTimeInput}>
                <Text style={Typography.p1d2}>{scheduledDate}</Text>
                <Divider
                  color={Colors.grey}
                  style={{marginVertical: Spacing.smallest}}
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
                  style={{marginVertical: Spacing.smallest}}
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
              style={{marginTop: Spacing.smallest}}>
              <Text style={Typography.p1d2}>Invite friends to join</Text>
              <Divider
                color={Colors.grey}
                style={{marginVertical: Spacing.smallest}}
              />
            </TouchableOpacity>
            <MultiProfileImg
              userList={['Anmol', 'Malik', 'Arnim', 'Derek', 'Jake']}
              propStyles={{marginTop: Spacing.smallest}}
            />

            {isLive ? (
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
              <View>
                <Button
                  type="PrimaryRound"
                  text="Schedule to Watch Later"
                  navigation={navigation}
                  screen="Registered"
                  style={{marginVertical: Spacing.smaller}}
                />
                <Button
                  type="TertiaryRound"
                  text="Watch Now"
                  style={{paddingVertical: Spacing.smallest}}
                />
              </View>
            )}
            {/* link to watch video on desktop
            {isLive && (
              <TouchableOpacity style={styles.copyLinkButton}>
                <Text style={styles.copyLinkText}>
                  Copy link to watch in desktop
                </Text>
                <Image source={copyImg} />
              </TouchableOpacity>
            )}
            */}
          </View>
          <View style={styles.classDescriptionContainer}>
            <ClassNavigator classDetails={classDetails} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={Typography.h3d1}>Instructor</Text>
            <View style={styles.instructorViewContainer}>
              <View style={styles.containerFlexRow}>
                <ProfileImg
                  userProfileImg={classDetails.users3url}
                  size="small"
                />
                <View style={styles.instructorNameContainer}>
                  <Text style={[Typography.p1d2]}>
                    {data[0].firstName} {data[0].lastName}
                  </Text>
                  <View style={styles.containerFlexRow}>
                    <Text style={Typography.p2d2}>About me</Text>
                    <Dot color={Colors.aquarius} size="base" />
                    <Text style={Typography.p2d2}>
                      {followersData.length} followers
                    </Text>
                  </View>
                </View>
              </View>
              <FollowButton
                followedUser={classDetails.instructorUserId}
                isUnfollow={false}
              />
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
