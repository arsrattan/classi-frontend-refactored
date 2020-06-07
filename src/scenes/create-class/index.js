import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Dropdown} from 'react-native-material-dropdown';
import {
  avatarCircleImg,
  crossImg,
  helpImg,
  privateImg,
  uploadImg,
} from '_assets';
import {Divider} from '_atoms';
import {FilterChip} from '_molecules';
import {Colors, Icons, Spacing, Typography} from '_styles';
import styles from './styles';

const CreateClassScreen = ({navigation}) => {
  const [uri, setUri] = useState('');
  const [press, setPress] = useState(false);
  const difficulty = ['Beginner', 'Intermediate', 'Advanced'];
  const duration = ['<15 Min', '15-30 Min', '>30 Min'];

  const handleUploadImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.uri) {
        setUri(response.uri);
      }
      console.log(response);
    });
  };

  return (
    <ScrollView style={styles.createClassContainer}>
      <View style={styles.createHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Browse');
          }}
          style={styles.closeButton}>
          <Image source={crossImg} style={Icons.normal} />
        </TouchableOpacity>
        <Text style={Typography.h2d1}>Create Class</Text>
      </View>
      <Text style={Typography.p1d2}>Select your cover photo</Text>
      <View>
        <TouchableOpacity
          onPress={handleUploadImage}
          style={[
            styles.coverContainer,
            {
              height: uri ? 150 : 83,
            },
          ]}>
          {uri ? (
            <Image
              resizeMode="cover"
              source={{uri: uri}}
              style={{width: '100%', height: '100%'}}
            />
          ) : (
            <Image source={uploadImg} style={Icons.normal} />
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={[
          Typography.p1d2,
          {paddingTop: Spacing.base, paddingBottom: Spacing.smallest},
        ]}>
        Class name
      </Text>
      <TextInput placeholder="Morning Pilates" style={Typography.p1d2} />
      <Divider
        color={Colors.aries}
        style={{marginVertical: Spacing.smallest}}
      />
      <Text
        style={[
          Typography.p1d2,
          {paddingTop: Spacing.base, paddingBottom: Spacing.smallest},
        ]}>
        Description
      </Text>
      <TextInput
        multiline={true}
        placeholder="Join me in a new Pilates class for strengthening and toning your lower body."
        style={Typography.p1d2}
      />
      <Divider
        color={Colors.aries}
        style={{marginVertical: Spacing.smallest}}
      />
      <Dropdown
        label="Select a workout type"
        data={difficulty}
        containerStyle={{paddingTop: 0, marginTop: 0}}
      />
      <Text
        style={[
          Typography.p1d2,
          {paddingTop: Spacing.base, paddingBottom: Spacing.smaller},
        ]}>
        Difficulty
      </Text>
      <FilterChip data={difficulty} press={press} setPress={setPress} />
      <Text
        style={[
          Typography.p1d2,
          {paddingTop: Spacing.base, paddingBottom: Spacing.smaller},
        ]}>
        Estimated Duration
      </Text>
      <FilterChip data={duration} press={press} setPress={setPress} />
      <View style={styles.privacyContainer}>
        <Text style={Typography.p1h2}>Class Type</Text>
        <View style={styles.padding} />
        <Image source={helpImg} style={Icons.smaller} />
      </View>
      <View style={styles.privacyButtonsContainer}>
        <TouchableOpacity style={styles.typeButton}>
          <Image source={avatarCircleImg} style={Icons.normal} />
          <Text style={Typography.p1h2}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton}>
          <Image source={privateImg} style={Icons.normal} />
          <Text style={Typography.p1h2}>Private</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PublishedClass');
        }}
        style={styles.registerButton}>
        <Text style={Typography.p1white}>Publish Class</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateClassScreen;
