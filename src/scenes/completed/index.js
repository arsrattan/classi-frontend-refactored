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
import {Card} from '_assets';
import {crossImg, finishImg, loveImgOrange, shareImgDark} from '_assets';
import {createClassCards} from '_utils';
import {classesMockData} from '_utils';

const CompletedScreen = ({navigation, route}) => {
  const {classBy} = route.params;
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.shareButton}>
          <Image source={shareImgDark} />
        </TouchableOpacity>

        <Image source={finishImg} height={100} width={100} />
        <Text style={styles.congoText}>Another class done!</Text>
        <Text style={styles.simpleText}>
          Congrats on finishing Tafia’s class on
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 15,
            lineHeight: 15,
            letterSpacing: -0.3,
            color: '#334E68',
          }}>
          {' '}
          Easy & Healthy Morning Omlettes
        </Text>
        <TouchableOpacity style={styles.saveVideoButton}>
          <Image source={loveImgOrange} style={{marginRight: 5}} />
          <Text style={styles.saveVideoText}>Saved Video Class</Text>
        </TouchableOpacity>
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
            value="Great class! I love it"
          />
        </View>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewDivider} />
      <View style={{padding: 16}}>
        <Text style={styles.upcomingText}>Upcoming Class from Tafia</Text>
        {createClassCards(classesMockData, navigation)}
      </View>
    </ScrollView>
  );
};

export default CompletedScreen;
