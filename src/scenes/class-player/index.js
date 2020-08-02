import React, { useState, useEffect } from 'react';
import { ScrollView, Text, PixelRatio, Dimensions } from 'react-native';
import { VideoView } from '_organisms';
import YouTube from 'react-native-youtube';
import styles from './styles';
import { GraphQLClient } from '_services';

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

  useEffect(() => {
    const createMeetingRequest = async () => {
      const createMeeting = async () => {
        try {
          const res = await fetch('http://localhost:3000/meeting', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          const json = await res.json();
          console.log(
            `Received meeting response: ${JSON.stringify(
              json.meeting.Meeting,
            )}`,
          );
          return json.meeting;
        } catch (err) {
          console.log(`Error!: ${err}`);
        }
      };

      const addHostToMeeting = async (meetingId, userName) => {
        try {
          const res = await fetch(
            `http://localhost:3000/attendee/${meetingId}?userId=${userName}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              query: {
                userId: userName,
              },
            },
          );
          const json = await res.json();
          console.log(
            `Received attendee response: ${JSON.stringify(json.attendee)}`,
          );
          return json.attendee;
        } catch (err) {
          console.log(`Error!: ${err}`);
        }
      };

      const meeting = await createMeeting();
      const attendee = await addHostToMeeting(
        meeting.Meeting.MeetingId,
        JSON.stringify(GraphQLClient.getCurrentUserId()),
      );

      setMeeting(meeting);
      setAttendee(attendee);
    };
    if (!isYoutubeVideo) {
      createMeetingRequest();
    }
  }, [isYoutubeVideo]);

  console.log('In class player!');

  return isYoutubeVideo ? (
    <ScrollView>
      <Text>Youtube Player</Text>
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
    </ScrollView>
  ) : (
    <>
      <Text>Live Stream Player</Text>
      <VideoView meetingObject={meeting} attendeeObject={attendee} />
    </>
  );
};

export default ClassPlayer;
