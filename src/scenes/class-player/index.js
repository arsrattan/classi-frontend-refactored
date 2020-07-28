import React, { useState } from 'react';
import { ScrollView, Text, PixelRatio, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './styles';

const ClassPlayer = ({ navigation, route }) => {
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

  console.log('In class player!');

  return (
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
  );
};

export default ClassPlayer;
