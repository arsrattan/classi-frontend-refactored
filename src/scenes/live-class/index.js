import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';
import io from 'socket.io-client';

const DIMENSIONS = Dimensions.get('window');
const PEER_CONNECTION_CONFIG = {
  iceServers: [
    {},
    {
      urls: 'stun:stun.l.google.com:19302',
    },
  ],
};

const LiveClassScreen = ({}) => {
  // const localStream = useRef();
  // const remoteStream = useRef();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [sdp, setSdp] = useState(null);
  const [socket, setSocket] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [peerConnection, setPeerConnection] = useState(null);

  const sendToPeer = (messageType, payload) => {
    socket.emit(messageType, {
      socketID: socket.id,
      payload,
    });
  };

  const createOffer = () => {
    console.log('Offer');
    peerConnection.createOffer({offerToReceiveVideo: 1}).then((sdp) => {
      peerConnection.setLocalDescription(sdp);
      sendToPeer('offerOrAnswer', sdp);
    });
  };

  const createAnswer = () => {
    console.log('Answer');
    peerConnection.createAnswer({offerToReceiveVideo: 1}).then((sdp) => {
      peerConnection.setLocalDescription(sdp);
      sendToPeer('offerOrAnswer', sdp);
    });
  };

  const setRemoteDescription = () => {
    const description = JSON.parse(sdp);
    peerConnection.setRemoteDescription(new RTCSessionDescription(description));
  };

  const addCandidate = () => {
    candidates.forEach((candidate) => {
      console.log(JSON.stringify(candidate));
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    });
  };

  useEffect(() => {
    setSocket(
      io.connect(''),
      {
        path: '',
        query: {},
      },
      () => {
        socket.on('connection-success', (success) => {
          console.log('Success!');
        });

        socket.on('offerOrAnswer', (sdp) => {
          setSdp(JSON.stringify(sdp));
          peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));
        });

        socket.on('candidate', (candidate) => {
          peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        });
      },
    );

    setPeerConnection(new RTCPeerConnection(PEER_CONNECTION_CONFIG), () => {
      peerConnection.onicecandidate = (e) => {
        if (e.candidate) {
          sendToPeer('candidate', e.candidate);
        }
      };

      peerConnection.oniceconnectionstatechange = (e) => {
        console.log(e);
      };

      peerConnection.onaddstream = (e) => {
        setRemoteStream(e.stream);
      };
    });

    const success = (stream) => {
      setLocalStream(stream);
      peerConnection.addStream(stream);
    };

    const failure = (e) => {
      console.log('getUserMedia Error: ', e);
    };

    let isFront = true;
    mediaDevices.enumerateDevices().then((sourceInfos) => {
      console.log(sourceInfos);
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (
          sourceInfo.kind == 'videoinput' &&
          sourceInfo.facing == (isFront ? 'front' : 'environment')
        ) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices
        .getUserMedia({
          audio: true,
          video: {
            mandatory: {
              minWidth: 500, // Provide your own width, height and frame rate here
              minHeight: 300,
              minFrameRate: 30,
            },
            facingMode: isFront ? 'user' : 'environment',
            optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
          },
        })
        .then(success)
        .catch(failure);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="blue" barStyle={'dark-content'} />
      <View style={{...styles.buttonsContainer}}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={this.createOffer}>
            <View style={styles.button}>
              <Text style={{...styles.textContent}}>Call</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={this.createAnswer}>
            <View style={styles.button}>
              <Text style={{...styles.textContent}}>Answer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{...styles.videosContainer}}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: 10,
            right: 10,
            width: 100,
            height: 200,
            backgroundColor: 'black', //width: '100%', height: '100%'
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => localStream._tracks[1]._switchCamera()}>
              <View>
                <RTCView
                  key={1}
                  zOrder={0}
                  objectFit="cover"
                  style={{...styles.rtcView}}
                  streamURL={localStream && localStream.toURL()}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{...styles.scrollView}}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {remoteStream}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 5,
    paddingVertical: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  textContent: {
    fontFamily: 'Avenir',
    fontSize: 20,
    textAlign: 'center',
  },
  videosContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rtcView: {
    width: 100, //dimensions.width,
    height: 200, //dimensions.height / 2,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'teal',
    padding: 15,
  },
  rtcViewRemote: {
    width: DIMENSIONS.width - 30,
    height: 200, //dimensions.height / 2,
    backgroundColor: 'black',
  },
});
export default LiveClassScreen;
