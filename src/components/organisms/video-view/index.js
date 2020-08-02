/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

//import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  requireNativeComponent,
  findNodeHandle,
  RecyclerViewBackedScrollView,
} from 'react-native';
//import { NativeFunction } from '../utils/Bridge';
import { VideoTile } from '_molecules';
import { NativeModules } from '_utils';
import styles from './styles';

const VideoView = ({ navigation, meetingObject, attendeeObject }) => {
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selfAttendeeId, setSelfAttendeeId] = useState('');

  // meeting name might need to be unique in order to identify the meeting for other people to join
  const [meetingName, setMeetingName] = useState('');

  // list of video tiles
  const [videoTiles, setVideoTiles] = useState([]);

  // listen for when user successfully joins the meeting and then set the inMeetingStatus to true
  useEffect(() => {
    console.log('Inside the meeting start listener hook');
    const meetingStartListener = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnMeetingStart,
      () => {
        console.log('Joined Meeting');
        setIsInMeeting(true);
        setIsLoading(false);
      },
    );
    return function cleanup() {
      meetingStartListener.remove();
    };
  }, []);

  // Add video tile for the user
  useEffect(() => {
    const addVideoTileListener = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnAddVideoTile,
      (tileState) => {
        console.log('New video tile event');
        setVideoTiles([...videoTiles, tileState.tileId]);
      },
    );
    return function cleanup() {
      addVideoTileListener.remove();
    };
  }, [videoTiles]);

  useEffect(() => {
    // create a new meeting and join
    const initializeMeetingSession = () => {
      setIsLoading(true);
      setMeetingName(meetingName);
      // setSelfAttendeeId(attendeeObject.Attendee.AttendeeId);
      // call iOS native function for joining meeting
      console.log(
        `Calling startMeeting function with meeting: ${JSON.stringify(
          meetingObject,
        )} and attendee: ${JSON.stringify(attendeeObject)}`,
      );
      NativeModules.NativeFunction.startMeeting(meetingObject, attendeeObject);
    };

    initializeMeetingSession('testMeeting');
  }, [meetingName, meetingObject, attendeeObject]);

  console.log('In Video Viewer!');

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
