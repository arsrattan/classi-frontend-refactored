import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {crossImg, registeredImg, shareImgLight} from '_assets';

const RegisteredScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View style={styles.congoContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.crossButton}>
          <Image source={crossImg} />
        </TouchableOpacity>

        <Image source={registeredImg} height={100} width={100} />
        <Text style={styles.congoText}>Congratulations!</Text>
        <Text style={styles.simpleText}>
          You are registered for{' '}
          <Text style={{fontWeight: 'bold'}}>‘Cooking for Dummies’</Text>. We
          will add this class to your upcoming class.
        </Text>
      </View>
      <View style={styles.viewDivider} />
      <View style={{backgroundColor: '#fff', padding: 16}}>
        <Text style={styles.shareFriendText}>
          Share this class with your followers!
        </Text>
        <View style={styles.optionalView}>
          <TextInput
            multiline={true}
            style={{padding: 12, fontSize: 15}}
            placeholder="Optional: add a caption "
          />
        </View>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewDivider} />
      <TouchableOpacity style={styles.inviteButton}>
        <Image
          style={{marginRight: 10, marginBottom: 5}}
          source={shareImgLight}
        />
        <Text style={styles.inviteText}>Invite your frineds</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisteredScreen;
