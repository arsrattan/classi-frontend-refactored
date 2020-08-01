/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

//import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  requireNativeComponent,
  findNodeHandle,
  RecyclerViewBackedScrollView,
} from 'react-native';
//import { NativeFunction } from '../utils/Bridge';
import { VideoTile } from '_molecules';
import { NativeModules } from '_utils';
import styles from './styles';

const VideoView = ({ navigation }) => {
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selfAttendeeId, setSelfAttendeeId] = useState('');

  // meeting name might need to be unique in order to identify the meeting for other people to join
  const [meetingName, setMeetingName] = useState('');

  // list of video tiles
  const [videoTiles, setVideoTiles] = useState([]);

  // listen for when user successfully joins the meeting and then set the inMeetingStatus to true
  useEffect(() => {
    const meetingStartListener = getSDKEventEmitter().addListener(
      MobileSDKEvent.OnMeetingStart,
      () => {
        console.log('Joined Meeting');
        setIsInMeeting(true);
        setIsLoading(false);
      },
    );
    return function cleanup() {
      this.meetingStartListener.remove();
    };
  });

  // Add video tile for the user
  useEffect(() => {
    const addVideoTileListener = getSDKEventEmitter().addListener(
      MobileSDKEvent.OnAddVideoTile,
      (tileState) => {
        console.log('New video tile event');
        if (tileState.isScreenShare) {
          this.setState((oldState) => ({
            ...oldState,
            screenShareTile: tileState.tileId,
          }));
        } else {
          setVideoTiles([...videoTiles, tileState.tileId]);
        }
      },
    );
    return function cleanup() {
      addVideoTileListener.remove();
    };
  });

  // create a new meeting and join
  initializeMeetingSession = (meetingName, userName) => {
    setIsLoading(true);

    // backend request
    createMeetingRequest(meetingName, userName)
      .then((meetingResponse) => {
        setMeetingName(meetingName);
        setSelfAttendeeId(
          meetingResponse.JoinInfo.Attendee.Attendee.AttendeeId,
        );
        // call iOS native function for joining meeting
        NativeModules.NativeFunction.startMeeting(
          meetingResponse.JoinInfo.Meeting.Meeting,
          meetingResponse.JoinInfo.Attendee.Attendee,
        );
      })
      .catch((error) => {
        Alert.alert(
          'Unable to find meeting',
          `There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired.\n ${error}`,
        );
        setIsLoading(false);
      });
  };

  initializeMeetingSession('testMeeting', 'derek');

  return (
    <View style={styles.videoContainer}>
      <Text>Workout class</Text>
      {videoTiles.map((tileId) => (
        <VideoTile style={styles.video} key={tileId} tileId={tileId} />
      ))}
    </View>
  );
};

export default VideoView;
