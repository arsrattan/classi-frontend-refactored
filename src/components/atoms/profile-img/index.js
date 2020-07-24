import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {editImg} from '_assets';
import {Icons, Colors} from '_styles';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';

const ProfileImg = ({userProfileImg, size, isChangeable, style}) => {
  let imgSize;
  if (size === 'small') {
    imgSize = {height: 40, width: 40, borderRadius: 20};
  } else if (size === 'base') {
    imgSize = {height: 50, width: 50, borderRadius: 50 / 2};
  } else if (size === 'medium') {
    imgSize = {height: 60, width: 60, borderRadius: 60 / 2};
  } else if (size === 'large') {
    imgSize = {height: 80, width: 80, borderRadius: 80 / 2};
  }

  const [selectedUri, setUri] = useState(
    'https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png',
  );
  const handleUploadImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.uri) {
        setUri(response.uri);
      }
    });
  };

  return (
    <View style={{alignItems: 'flex-end'}}>
      <Image source={{uri: selectedUri}} style={{...style, ...imgSize}} />
      {isChangeable !== undefined ? (
        <TouchableOpacity
          onPress={handleUploadImage}
          style={{...styles.editContainer, bottom: 0}}>
          <Image source={editImg} style={Icons.smallest} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ProfileImg;
