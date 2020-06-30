import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {crossImg} from '_assets';
import {Icons, Spacing, Typography, Colors} from '_styles';
import styles from './styles';
import {ProfileImg, InputField} from '_atoms';

const EditProfileScreen = (props) => {
  const [uri, setUri] = useState('');
  const handleUploadImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.uri) {
        setUri(response.uri);
      }
      console.log(response);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{position: 'absolute', left: Spacing.base}}>
            <Image source={crossImg} style={Icons.normal} />
          </TouchableOpacity>
          <Text style={Typography.p1d2}>Edit Profile</Text>
        </View>

        <View style={styles.profileImgContainer}>
          <ProfileImg size="large" />
          <TouchableOpacity onPress={handleUploadImage}>
            <Text
              style={{
                ...Typography.p1,
                color: Colors.andromeda,
                marginTop: Spacing.smaller,
              }}>
              Change picture
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputFieldContainer}>
          <InputField label="Name" placeholderText="John Doe" />
          <InputField label="Username" placeholderText="WorkoutGuru1" />
          <InputField label="Bio" placeholderText="user@email.com" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditProfileScreen;
