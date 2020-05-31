import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { Avatar } from '_atoms';
import {
    arrowBackImg,
    shareImgLight,
    calendarImg,
    clockImg,
    copyImg,
    checkMarkImg
} from '_assets';
import { ClassNavigator } from '_navigations';

const ClassScreen = ({ navigation, route }) => {
  const { classDetails, isWatching } = route.params;
  const { className, classBy, url } = classDetails;

  return (
    <ScrollView bounces={false} style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground
        resizeMode='cover'
        style={{ height: 250, width: '100%' }}
        source={{
          uri: url,
        }}
      >
        <View style={styles.onImageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Image source={arrowBackImg} width={10} height={10} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={shareImgLight} width={10} height={10} />
          </TouchableOpacity>
        </View>
        <View style={styles.tag}>
          <Text style={styles.beginnerText}>Beginner</Text>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, paddingVertical: 16, paddingHorizontal: 16 }}>
        <Text style={styles.classTitleText}>{className}</Text>
        <Text style={[styles.instructorName, { paddingTop: 12 }]}>
          {`by ${classBy}`}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 17,
          }}
        >
          <Image source={calendarImg} />
          <Text style={styles.dateAndTime}>26 April 2020</Text>
          <Image source={clockImg} style={{ marginLeft: 19 }} />
          <Text style={styles.dateAndTime}>12:30</Text>
          <View style={styles.liveIndicator} />
          <Text style={styles.liveNowText}>Live Now</Text>
        </View>
      </View>
      <View style={styles.registeredUserView}>
        <Image
          style={{ borderRadius: 16 }}
          source={{
            uri: 'https://placebeard.it/640x360',
            height: 32,
            width: 32,
          }}
        />
        <Image
          style={{
            borderRadius: 16,
            position: 'absolute',
            top: 19,
            left: 40,
          }}
          source={{
            uri: 'https://placebeard.it/640x360',
            height: 32,
            width: 32,
          }}
        />
        <Image
          style={{
            borderRadius: 16,
            position: 'absolute',
            top: 19,
            left: 60,
          }}
          source={{
            uri: 'http://placeimg.com/640/360/any',
            height: 32,
            width: 32,
          }}
        />
        <View style={styles.registeredUserCountView}>
          <Text style={styles.registeredCount}>12+</Text>
        </View>
        <Text style={styles.boldNumber}>234 </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#334E68',
          }}
        >
          User Registered
        </Text>
      </View>
      {isWatching ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed', { classBy: classBy })
          }}
          style={styles.registerButton}
        >
          <Text style={styles.registerNowText}>Watch Now</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Registered')
          }}
          style={styles.registerButton}
        >
          <Text style={styles.registerNowText}>Register Now</Text>
        </TouchableOpacity>
      )}
      {isWatching && (
        <TouchableOpacity style={styles.copyLinkButton}>
          <Text style={styles.copyLinkText}>Copy link to watch in desktop</Text>
          <Image source={copyImg} />
        </TouchableOpacity>
      )}
      <View style={styles.viewDivider} />
      <View style={{ marginTop: 20 }}>
        <ClassNavigator />
        <View style={styles.viewDivider} />
        <View style={{ height: 95, paddingHorizontal: 16, paddingTop: 13 }}>
          <Text style={styles.boldText}>Instructor</Text>
          <View style={styles.instructorView}>
            <Image
              source={{
                uri: 'https://placebeard.it/640x360',
                width: 40,
                height: 40,
              }}
              style={{ borderRadius: 20 }}
            />
            <View>
              <Text style={[styles.instructorName, { paddingLeft: 6 }]}>
                Tafia Salsabila
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 6,
                  paddingTop: 2,
                }}
              >
                <Text style={styles.numOfClassessAndFollowers}>28 </Text>
                <Text style={styles.normalText}>of classes </Text>
                <Text style={styles.numOfClassessAndFollowers}>12K </Text>
                <Text style={styles.normalText}>of Follower</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.followingButton}>
              <Image source={checkMarkImg} style={{ marginBottom: 5 }} />
              <Text style={styles.followingText}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewDivider} />
        <View style={styles.commentsContainer}>
          <Text style={styles.boldText}>Comments(1)</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              paddingTop: 20,
            }}
          >
            <Avatar style={styles.avatar} />

            <View style={styles.writeCommentView}>
              <TextInput placeholder='Write a comments' />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              paddingTop: 20,
            }}
          >
            <Image
              source={{
                uri: 'https://placebeard.it/640x360',
                width: 40,
                height: 40,
              }}
              style={{ borderRadius: 20 }}
            />

            <View style={styles.commentTile}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.userName}>Shawn Carter</Text>
                <Text style={styles.commentDateAndTime}>wed, apr 26</Text>
                <Text style={styles.commentDateAndTime}>6.30pm</Text>
              </View>
              <Text style={styles.commentText}>
                Thank you for sharing your experiences. I want join that class
                next week as well.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

export default ClassScreen;
