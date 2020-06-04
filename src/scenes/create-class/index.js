import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import {
  fontFamily,
  crossImg,
  helpImg,
  avatarCircleImg,
  privateImg,
  uploadImg,
  arrowImg,
} from '_assets';
import {FilterChip} from '_molecules';

const CreateClassScreen = ({navigation}) => {
  const [uri, setUri] = useState('');
  const [press, setPress] = useState(false);
  const difficulty = ['Beginner', 'Intermediate', 'Advanced'];
  const duration = ['<15 Min', '15-30 Min', '>30 Min'];

  const handleUploadImage = () => {
    ImagePicker.showImagePicker(response => {
      if (response.uri) {
        setUri(response.uri);
      }
      console.log(response);
    });
  };

  return (
    <ScrollView style={styles.createClassContainer}>
      <Text style={styles.createClass}>Create Class</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Browse');
        }}
        style={{position: 'absolute', left: 0, top: 64}}>
        <Image source={crossImg} />
      </TouchableOpacity>
      <Text style={styles.selectCover}>Select your cover photo</Text>
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
            <Image source={uploadImg} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Class name</Text>
      <TextInput
        value="Bella Salsabila"
        style={{
          paddingTop: 8,
          fontSize: 15,
          lineHeight: 19,
          fontFamily: fontFamily.book,
          color: '#334E68',
        }}
      />
      <View style={{borderWidth: 1, marginTop: 4, borderColor: '#334E68'}} />
      <Text style={styles.heading}>Description</Text>
      <TextInput
        multiline={true}
        value="Pilates instructor Suzanne Deason leads a strengthening and sculpting
        lower body workout using the balance ball."
        style={{
          paddingTop: 8,
          fontSize: 15,
          lineHeight: 22,
          fontFamily: fontFamily.book,
          color: '#334E68',
          letterSpacing: -0.3,
        }}
      />
      <View
        style={{
          borderWidth: 1,
          marginTop: 4,
          borderColor: '#rgba(161, 174, 183, 0.3)',
        }}
      />
      <Text style={styles.heading}>Workout Type</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 11,
        }}>
        <Text
          style={{
            paddingTop: 8,
            fontSize: 15,
            lineHeight: 19,
            fontFamily: fontFamily.book,
            color: '#B0B7C4',
          }}>
          Choose workout categories
        </Text>
        <TouchableOpacity>
          <Image source={arrowImg} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 4,
          borderColor: '#rgba(161, 174, 183, 0.3)',
        }}
      />
      <Text style={styles.heading}>Difficulty</Text>
      <FilterChip data={difficulty} press={press} setPress={setPress} />
      <Text style={styles.heading}>Estimated Duration</Text>
      <FilterChip data={duration} press={press} setPress={setPress} />
      <View style={{flexDirection: 'row', paddingTop: 24}}>
        <Text style={[styles.heading, {paddingTop: 0}]}>Class Type</Text>
        <Image source={helpImg} style={{marginLeft: 10}} />
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 12}}>
        <TouchableOpacity style={styles.typeButton}>
          <Image source={avatarCircleImg} />
          <Text style={{paddingLeft: 7}}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton}>
          <Image source={privateImg} />
          <Text style={{paddingLeft: 7}}>Private</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PublishedClass');
        }}
        style={styles.registerButton}>
        <Text style={styles.registerNowText}>Publish Class</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateClassScreen;
