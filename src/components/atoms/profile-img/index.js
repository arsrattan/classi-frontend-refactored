import React from 'react';
import {Image} from 'react-native';

const ProfileImg = ({userProfileImg, size, styles}) => {
  let imgSize;
  if (size === 'small') {
    imgSize = {height: 40, width: 40, borderRadius: 20};
  } else if (size === 'medium') {
    imgSize = {height: 60, width: 60, borderRadius: 60 / 2};
  } else if (size === 'large') {
    imgSize = {height: 80, width: 80, borderRadius: 80 / 2};
  }

  return (
    <Image
      source={{uri: userProfileImg}}
      style={{...styles, ...imgSize}}
    />
  );
};

export default ProfileImg;
