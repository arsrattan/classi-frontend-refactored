import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Header} from '_molecules';
import styles from './styles';
import {arrowBackDarkImg, uploadImg, crossImg, closeLightImg} from '_assets';
import {Colors, Spacing, Typography, Icons} from '_styles';
import ImagePicker from 'react-native-image-picker';

const WritePostScreen = ({navigation}) => {
  const [postImageUri, setPostImageUri] = useState();
  const handleUploadImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.uri) {
        setPostImageUri(response.uri);
      }
    });
  };

  const [postCaption, setPostCaption] = useState();

  const windowWidth = Dimensions.get('window').width - Spacing.base * 2;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.white}
          text={
            <Text
              style={{
                ...Typography.p1,
                color: Colors.aries,
                ...Typography.bold,
              }}>
              Share a Post
            </Text>
          }
          leftIcon={arrowBackDarkImg}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
          rightText="Post"
          onPressRightIcon={() => {
            navigation.navigate('FeedScreen');
          }}
        />
        {postImageUri !== undefined ? (
          <ImageBackground
            source={{uri: postImageUri}}
            style={{width: '100%', height: windowWidth}}
            imageStyle={{borderRadius: 10}}>
            <TouchableOpacity
              style={styles.closeImageContainer}
              onPress={() => {
                setPostImageUri();
              }}>
              <Image source={closeLightImg} style={Icons.smaller} />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <TouchableOpacity
            style={styles.uploadImageContainer}
            onPress={handleUploadImage}>
            <View style={{alignItems: 'center'}}>
              <Image source={uploadImg} style={Icons.normal} />
              <Text
                style={{
                  ...Typography.p1,
                  color: Colors.aries,
                  ...Typography.bold,
                }}>
                Upload Image
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <TextInput
          style={{
            ...Typography.p1,
            color: Colors.aries,
            marginTop: Spacing.base,
          }}
          value={postCaption}
          onChangeText={(text) => {
            setPostCaption(text);
          }}
          placeholder="Share your experiences..."
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WritePostScreen;
