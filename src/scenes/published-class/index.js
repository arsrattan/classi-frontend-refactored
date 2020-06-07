import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {crossImg, scheduledImg, unlovedImg} from '_assets';
import {Button} from '_atoms';
import {Icons, Spacing, Typography} from '_styles';

const PublishedClassScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {StatusBar.setBarStyle('dark-content', true)}
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Browse');
          }}
          style={styles.crossButton}>
          <Image source={crossImg} style={Icons.normal} />
        </TouchableOpacity>

        <Image source={scheduledImg} style={Icons.halfScreen} />
        <Text style={Typography.h1d1}>Congratulations!</Text>
        <View style={styles.subtextContainer}>
          <Text
            style={[
              Typography.p1d2,
              {textAlign: 'center', paddingBottom: Spacing.large},
            ]}>
            Your Class has been scheduled
            <Text style={{fontWeight: 'bold'}}>‘ Cooking for Dummies ’</Text>.
            We will add this class to your upcoming class.
          </Text>
          <View style={styles.centerButtonContainer}>
            <Button
              text="Save this class"
              type="SecondaryRound"
              icon={unlovedImg}
            />
          </View>
        </View>
      </View>
      <View style={styles.postContainer}>
        <Text style={Typography.p1d2}>
          Share this class with your followers!
        </Text>
        <View style={styles.optionalView}>
          <TextInput
            multiline={true}
            style={styles.placeholderText}
            placeholder="Optional: add a caption "
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button text="Post" type="PrimarySquare" />
        </View>
      </View>
    </View>
  );
};

export default PublishedClassScreen;
