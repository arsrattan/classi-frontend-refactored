import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles'
import { crossImg, scheduledImg } from '_assets';

const PublishedClassScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.congoContainer}>
        {StatusBar.setBarStyle('dark-content', true)}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Browse')
          }}
          style={styles.crossButton}
        >
          <Image source={crossImg} />
        </TouchableOpacity>

        <Image
          source={scheduledImg}
          height={100}
          width={100}
        />
        <Text style={styles.congoText}>Your Class has been scheduled</Text>
        <Text style={styles.simpleText}>
          Your Class has been scheduled
          <Text style={{ fontWeight: 'bold' }}>‘ Cooking for Dummies ’</Text>.
          We will add this class to your upcoming class.
        </Text>
      </View>

      <TouchableOpacity style={styles.inviteButton}>
        <Feather
          style={{ paddingRight: 19 }}
          name='upload'
          color='#fff'
          size={21}
        />
        <Text style={styles.inviteText}>Invite your frineds</Text>
      </TouchableOpacity>
    </View>
  )
};

export default PublishedClassScreen;
