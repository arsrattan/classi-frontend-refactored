import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import {ProfileImg, Divider} from '_atoms';
import {Typography, Icons, Spacing, Colors} from '_styles';
import {menuImg} from '_assets';
import {helperFunctions} from '_utils';

const WorkoutGroup = ({navigation, numClasses}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.flexRow}
        onPress={() => {
          navigation.navigate('GroupDetailsScreen');
        }}>
        <ProfileImg
          size="base"
          userProfileImg="https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png"
        />
        <View style={styles.groupHeaderText}>
          <Text style={Typography.h3d1}>Group name</Text>
          <Text
            numberOfLines={1}
            style={{
              ...Typography.p2d2,
              marginTop: Spacing.smallest,
            }}>
            {helperFunctions.formatNamesList([
              'Derek',
              'Malik',
              'Anmol',
              'Arnim',
            ])}
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={menuImg} style={Icons.normal} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.upcomingClassesContainer}>
        <Text
          style={{...Typography.p1, ...Typography.unbold, color: Colors.aries}}>
          <Text style={{...Typography.bold}}>12 </Text>Upcoming classes
        </Text>
        <FlatList
          style={{marginTop: Spacing.small}}
          data={[
            {
              imageSource:
                'https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png',
            },
            {
              imageSource:
                'https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png',
            },
            {
              imageSource:
                'https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png',
            },
          ]}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Image
              source={{
                uri: item.imageSource,
              }}
              style={styles.classPicture}
            />
          )}
        />
      </View>
    </View>
  );
};

export default WorkoutGroup;
