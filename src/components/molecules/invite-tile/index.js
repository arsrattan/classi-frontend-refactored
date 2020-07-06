import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FollowButton, ProfileImg, Divider} from '_atoms';
import {Typography, Colors, Spacing} from '_styles';
import styles from './styles';

const InviteTile = ({name}) => {
  const [isInvited, setIsInvited] = useState(false);

  const onClickInvite = () => {
    setIsInvited(!isInvited);
  };
  return (
    <View style={{marginTop: Spacing.small}}>
      <View style={styles.notifContainer}>
        <ProfileImg
          size="small"
          userProfileImg="https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png"
        />
        <View style={styles.notifContentContainer}>
          <Text style={styles.userNameText}>{name}</Text>
        </View>
        <TouchableOpacity
          onPress={onClickInvite}
          style={isInvited ? styles.invitedButton : styles.inviteButton}>
          <Text style={isInvited ? styles.invitedText : styles.inviteText}>
            {isInvited ? 'Invited' : 'Invite'}
          </Text>
        </TouchableOpacity>
      </View>
      <Divider />
    </View>
  );
};
export default InviteTile;
