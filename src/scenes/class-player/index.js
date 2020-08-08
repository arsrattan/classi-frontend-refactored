import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  PixelRatio,
  Dimensions,
  Image,
} from 'react-native';
import { Header } from '_molecules';
import { VideoView } from '_organisms';
import YouTube from 'react-native-youtube';
import styles from './styles';
import { GraphQLClient, amazonSDK } from '_services';
import { Colors, Spacing, Typography, Icons } from '_styles';
import {
  arrowBackDarkImg,
  audioOnImg,
  audioOffImg,
  videoOnImg,
  videoOffImg,
  inviteImg,
} from '_assets';
import { NativeModules } from '_utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ClassPlayer = ({ navigation, route, isYoutubeVideo }) => {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(true);
  const [containerMounted, setContainerMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(null);
  const { classVideoURL } = route.params;
  const videoId = classVideoURL.split('watch?v=')[1];

  const [meeting, setMeeting] = useState({});
  const [attendee, setAttendee] = useState({});

  const [isInMeeting, setIsInMeeting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selfAttendeeId, setSelfAttendeeId] = useState('');

  // meeting name might need to be unique in order to identify the meeting for other people to join
  const [meetingName, setMeetingName] = useState('');

  // list of video tiles
  const [videoTiles, setVideoTiles] = useState([]);

  // listen for when user successfully joins the meeting and then set the inMeetingStatus to true
  useEffect(() => {
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

  useEffect(() => {
    const meetingEndListener = NativeModules.getSDKEventEmitter().addListener(
      NativeModules.MobileSDKEvent.OnMeetingEnd,
      () => {
        console.log('Ended Meeting');
        setIsInMeeting(false);
        setIsLoading(false);
      },
    );
    return function cleanup() {
      meetingEndListener.remove();
    };
  });

  // Add video tile for the user
  /*
  useEffect(() => {
    //console.log('In video tile hook');
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
  }, []);
  */

  // create a new meeting and join
  const initializeMeetingSession = () => {
    setIsLoading(true);

    console.log('initializeMeetingSession called');

    amazonSDK
      .createMeetingRequest('testMeeting3', 'derek')
      .then((meetingResponse) => {
        setMeetingName('testMeeting');
        setSelfAttendeeId(
          meetingResponse.JoinInfo.Attendee.Attendee.AttendeeId,
        );
        // call iOS native function for joining meeting
        console.log(
          `Calling startMeeting function with meeting: ${JSON.stringify(
            meetingResponse.meeting,
          )} and attendee: ${JSON.stringify(meetingResponse.attendee)}`,
        );
        NativeModules.NativeFunction.startMeeting(
          meetingResponse.JoinInfo.Meeting.Meeting,
          meetingResponse.JoinInfo.Attendee.Attendee,
        );
      })
      .catch((error) => {
        console.log(
          'Unable to find meeting',
          `There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired.\n ${error}`,
        );
        setIsLoading(false);
      });
  };

  console.log('In class player!');

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.white}
          text={
            <Text style={{ ...Typography.p1d2, ...Typography.bold }}>
              Watch Class
            </Text>
          }
          leftIcon={arrowBackDarkImg}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
        />
      </View>
      <YouTube
        apiKey="AIzaSyCYW51rAwuXePU5TIQrVMxYXlHs291yPJ8"
        videoId={videoId}
        play={isPlaying}
        fullscreen={fullscreen}
        playsInLine={true}
        controls={1}
        onReady={(e) => setIsReady(true)}
        onError={(e) => setError(e.error)}
        onChangeState={(e) => setStatus(e.state)}
        onChangeQuality={(e) => setQuality(e.quality)}
        onChangeFullscreen={(e) => setFullscreen(e.isFullscreen)}
        onProgress={(e) => setCurrentTime(e.currentTime)}
        style={[
          {
            height: PixelRatio.roundToNearestPixel(
              Dimensions.get('window').width / (16 / 9),
            ),
          },
          styles.player,
        ]}
      />
      {isInMeeting ? (
        <VideoView
          meetingTitle="Test Meeting"
          selfAttendeeId={selfAttendeeId}
        />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.ariesAlpha,
              paddingHorizontal: Spacing.base,
              paddingVertical: Spacing.smallest,
              marginBottom: Spacing.larger,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              initializeMeetingSession();
            }}>
            <Text
              style={{
                ...Typography.h3,
                color: Colors.white,
                marginRight: Spacing.smaller,
              }}>
              Invite Friends
            </Text>
            <Image style={Icons.normal} source={inviteImg} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ClassPlayer;
