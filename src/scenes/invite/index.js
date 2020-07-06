import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {arrowBackDarkImg, copyImg, searchImg} from '_assets';
import {InputBox} from '_atoms';
import {
  Header,
  RecommendedUsers,
  SmallHortClassCard,
  InviteTile,
} from '_molecules';
import {FeedPost} from '_organisms';
import {Icons, Typography, Spacing, Colors} from '_styles';
import styles from './styles';

const Invite = ({navigation, route}) => {
  // might not need these if we get the invited list from the backend
  const {invitedList} = route.params;
  const {addToList} = route.params;

  const [searchFriendName, setSearchName] = useState('');
  const searchNameAction = (name, misc) => {
    setSearchName(name);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        {StatusBar.setBarStyle('dark-content', true)}
        <View style={styles.topSectionContainer}>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={arrowBackDarkImg} style={Icons.normal} />
          </TouchableOpacity>
          <Text style={styles.inviteHeaderText}>Invite Friends</Text>
          <View style={styles.classCardContainer}>
            <SmallHortClassCard hasBackground={true} />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={Typography.h3d1}>Share Class</Text>
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
            <Image style={Icons.normal} source={copyImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={Typography.h3d1}>Invite workout groups</Text>
          <InviteTile name="Malik" />
          <InviteTile name="Malik" />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={Typography.h3d1}>Invite friends</Text>
          <View style={{paddingTop: Spacing.small}}>
            <InputBox
              placeholderText={'Search for friends'}
              icon={searchImg}
              value={searchFriendName}
              onChange={searchNameAction}
              name={'className'}
            />
          </View>
          <InviteTile name="Malik" />
          <InviteTile name="Malik" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Invite;
