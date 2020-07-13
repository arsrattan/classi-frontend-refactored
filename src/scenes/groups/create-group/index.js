import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {arrowBackDarkImg, copyImg} from '_assets';
import {ProfileImg, InputField} from '_atoms';
import {Header, SearchUsers} from '_molecules';
import {Icons, Typography, Spacing, Colors} from '_styles';
import styles from './styles';

const CreateGroup = ({navigation, route}) => {
  const [searchFriendName, setSearchName] = useState('');
  const searchNameAction = (name, misc) => {
    setSearchName(name);
  };

  const [groupName, setGroupName] = useState();
  const handleGroupName = (newValue, name) => {
    setGroupName(newValue);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        {StatusBar.setBarStyle('dark-content', true)}
        <View style={styles.sectionContainer}>
          <Header
            navigation={navigation}
            backgroundColor={Colors.white}
            text={
              <Text style={{...Typography.p1d2, ...Typography.bold}}>
                Create New Workout Group
              </Text>
            }
            leftIcon={arrowBackDarkImg}
            onPressLeftIcon={() => {
              navigation.goBack();
            }}
          />
          <View style={{marginBottom: Spacing.small, alignItems: 'center'}}>
            <ProfileImg
              size="large"
              userProfileImg="https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png"
              isChangeable={true}
            />
          </View>
          <Text
            style={{
              ...Typography.p1d2,
              ...Typography.medium,
              marginBottom: Spacing.smaller,
            }}>
            Group Name
          </Text>
          <InputField
            placeholderText="Group name"
            value={groupName}
            onChange={handleGroupName}
          />
        </View>
        {/*<View style={styles.topSectionContainer}>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={arrowBackDarkImg} style={Icons.normal} />
          </TouchableOpacity>
          <Text style={styles.inviteHeaderText}>Invite Friends</Text>
        </View>*/}
        <View style={styles.sectionContainerPadded}>
          <Text style={Typography.h3d1}>Share Group Invite</Text>
          <TouchableOpacity
            style={styles.copyLinkContainer}
            onPress={() => {
              Clipboard.setString('classi.live/link/path');
            }}>
            <Text
              style={{
                ...Typography.p1,
                color: Colors.andromeda,
              }}>
              classi.live/link/path
            </Text>
            <Image style={Icons.small} source={copyImg} />
          </TouchableOpacity>
        </View>
        <SearchUsers
          navigation={navigation}
          title="Invite Friends"
          searchValue={searchFriendName}
          handleSearchValue={setSearchName}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateGroup;
