/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

//import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
//import { NativeFunction } from '../utils/Bridge';
import { VideoTile } from '_molecules';
import { NativeModules } from '_utils';
import styles from './styles';
import {
  audioOnImg,
  audioOffImg,
  videoOnImg,
  videoOffImg,
  phoneImg,
  inviteImg,
} from '_assets';
import { Colors, Typography, Icons, Spacing } from '_styles';

// Maps attendee Id to attendee Name
const attendeeNameMap = {};

class VideoView extends React.Component {
  constructor() {
    super();
    this.state = {
      attendees: [],
      videoTiles: [],
      mutedAttendee: [],
      selfVideoEnabled: false,
      meetingTitle: '',
      screenShareTile: null,
    };
  }

  componentDidMount() {
    /**
     * Attendee Join and Leave handler
     */
    this.onAttendeesJoinSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnAttendeesJoin,
      ({ attendeeId, externalUserId }) => {
        if (!(attendeeId in attendeeNameMap)) {
          // The externalUserId will be a format such as c19587e7#Alice
          attendeeNameMap[attendeeId] = externalUserId.split('#')[1];
        }
        this.setState((oldState) => ({
          ...oldState,
          attendees: oldState.attendees.concat([attendeeId]),
        }));
      },
    );

    this.onAttendeesLeaveSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnAttendeesLeave,
      ({ attendeeId }) => {
        this.setState((oldState) => ({
          ...oldState,
          attendees: oldState.attendees.filter(
            (attendeeToCompare) => attendeeId != attendeeToCompare,
          ),
        }));
      },
    );

    /**
     * Attendee Mute & Unmute handler
     */
    this.onAttendeesMuteSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnAttendeesMute,
      (attendeeId) => {
        this.setState((oldState) => ({
          ...oldState,
          mutedAttendee: oldState.mutedAttendee.concat([attendeeId]),
        }));
      },
    );

    this.onAttendeesUnmuteSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnAttendeesUnmute,
      (attendeeId) => {
        this.setState((oldState) => ({
          ...oldState,
          mutedAttendee: oldState.mutedAttendee.filter(
            (attendeeToCompare) => attendeeId != attendeeToCompare,
          ),
        }));
      },
    );

    /**
     * Video tile Add & Remove Handler
     */
    this.onAddVideoTileSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnAddVideoTile,
      (tileState) => {
        if (tileState.isScreenShare) {
          this.setState((oldState) => ({
            ...oldState,
            screenShareTile: tileState.tileId,
          }));
        } else {
          console.log('Add Tile Event');
          this.setState((oldState) => ({
            ...oldState,
            videoTiles: [...oldState.videoTiles, tileState.tileId],
            selfVideoEnabled: tileState.isLocal
              ? true
              : oldState.selfVideoEnabled,
          }));
        }
      },
    );

    this.onRemoveVideoTileSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnRemoveVideoTile,
      (tileState) => {
        if (tileState.isScreenShare) {
          this.setState((oldState) => ({
            ...oldState,
            screenShareTile: null,
          }));
        } else {
          this.setState((oldState) => ({
            ...oldState,
            videoTiles: oldState.videoTiles.filter(
              (tileIdToCompare) => tileIdToCompare != tileState.tileId,
            ),
            selfVideoEnabled: tileState.isLocal
              ? false
              : oldState.selfVideoEnabled,
          }));
        }
      },
    );

    /**
     * General Error handler
     */
    this.onErrorSubscription = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnError,
      (errorType) => {
        switch (errorType) {
          case MeetingError.OnMaximumConcurrentVideoReached:
            Alert.alert(
              'Failed to enable video',
              'maximum number of concurrent videos reached!',
            );
            break;
          default:
            Alert.alert('Error', errorType);
            break;
        }
      },
    );
  }

  componentWillUnmount() {
    if (this.onAttendeesJoinSubscription) {
      this.onAttendeesJoinSubscription.remove();
    }
    if (this.onAttendeesLeaveSubscription) {
      this.onAttendeesLeaveSubscription.remove();
    }
    if (this.onAttendeesMuteSubscription) {
      this.onAttendeesMuteSubscription.remove();
    }
    if (this.onAttendeesUnmuteSubscription) {
      this.onAttendeesUnmuteSubscription.remove();
    }
    if (this.onAddVideoTileSubscription) {
      this.onAddVideoTileSubscription.remove();
    }
    if (this.onRemoveVideoTileSubscription) {
      this.onRemoveVideoTileSubscription.remove();
    }
    if (this.onErrorSubscription) {
      this.onErrorSubscription.remove();
    }
  }

  render() {
    const currentMuted = this.state.mutedAttendee.includes(
      this.props.selfAttendeeId,
    );
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{this.props.meetingTitle}</Text>
        <Text style={styles.title}>Video</Text>
        <View style={styles.videoContainer}>
          {this.state.videoTiles.length > 0 ? (
            this.state.videoTiles.map((tileId) => (
              <VideoTile style={styles.video} key={tileId} tileId={tileId} />
            ))
          ) : (
            <Text style={styles.subtitle}>
              No one is sharing video at this moment
            </Text>
          )}
        </View>
        <Text style={styles.title}>Attendee</Text>
        {/*
        <FlatList
          style={styles.attendeeList}
          data={this.state.attendees}
          renderItem={({ item }) => (
            <AttendeeItem
              attendeeName={
                attendeeNameMap[item] ? attendeeNameMap[item] : item
              }
              muted={this.state.mutedAttendee.includes(item)}
            />
          )}
          keyExtractor={(item) => item}
        />
            */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={{ flexDirection: 'row' }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              backgroundColor: Colors.sirius,
              height: 100,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingTop: Spacing.base,
            }}>
            <TouchableOpacity
              onPress={() => {
                console.log(`Audio state: ${currentMuted}`);
                NativeModules.NativeFunction.setMute(!currentMuted);
              }}>
              <Image
                style={Icons.normal}
                source={currentMuted ? audioOffImg : audioOnImg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#EF4E3B',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                NativeModules.NativeFunction.stopMeeting();
              }}>
              <Image style={Icons.small} source={phoneImg} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log(`Video state: ${this.state.selfVideoEnabled}`);
                NativeModules.NativeFunction.setCameraOn(
                  !this.state.selfVideoEnabled,
                );
              }}>
              <Image
                style={Icons.normal}
                source={this.state.selfVideoEnabled ? videoOnImg : videoOffImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default VideoView;
