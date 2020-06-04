import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {crossImg, menuImg} from '_assets';
import {fontFamily} from '_assets';
import {NotifTile} from '_molecules';

const NotificationsScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View style={styles.notificationHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={crossImg} />
        </TouchableOpacity>
        <Text style={styles.notifHeaderText}>Notifications</Text>
        <TouchableOpacity>
          <Image source={menuImg} />
        </TouchableOpacity>
      </View>
      <NotifTile
        user="Markian"
        action="started following you"
        date="3h ago"
        isFollow={true}
      />
      <NotifTile
        user="Christina"
        action="made a really long notification and it's going to go two lines and maybe even more"
        date="3h ago"
        isFollow={false}
      />
    </ScrollView>
  );
};

export default NotificationsScreen;
