import React from 'react';
import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import Styles from './styles';
import { HomeHeader } from '_molecules'
import { Card, ImageTile } from '_atoms';
import { cameraImg, arrowImg } from '_assets';

const HomeScreen = ({ navigation }) => (
  <View style={Styles.container}>
    {StatusBar.setBarStyle('light-content', true)}
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#1E2432' }}>
        <HomeHeader props={ navigation } />
        <Text style={Styles.nextLiveText}>Your Next Live Classes</Text>
        <Card showLive={true} props={ navigation } />
      </View>
      <View style={{ flex: 1, backgroundColor: '#F4F5F6' }}>
        <View style={Styles.classHappeningHeader}>
          <Image source={cameraImg} />
          <Text style={Styles.happingNowText}>Classes Happening Now</Text>
        </View>
        <Card showLive={true} props={ navigation } />
      </View>
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#F4F5F6' }}>
        <Text style={Styles.recommandedText}>Recommended Classes</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}
        >
          <Text style={Styles.intestedText}>I’m interested in...</Text>
          <Text style={Styles.allClassesText}>All Classes</Text>
          <Image
            style={{ position: 'absolute', right: 25, top: 18 }}
            source={arrowImg}
          />
        </View>
        <ImageTile props={ navigation } />
      </View>
    </ScrollView>
  </View>
);

export default HomeScreen;