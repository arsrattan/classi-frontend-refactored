import React from 'react';
import {View, Text, StatusBar, ScrollView, Image, FlatList} from 'react-native';
import styles from './styles';
import {Header} from '_molecules';
import {ImageTile} from '_atoms';
import {cameraImg, arrowImg} from '_assets';
import {classesMockData, createClassCards} from '_utils';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    {StatusBar.setBarStyle('light-content', true)}
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={{flex: 1, paddingTop: 20, backgroundColor: '#1E2432'}}>
        <Header
          navigation={navigation}
          headerStyle="dark"
          text="Welcome back"
          accentText="Derek"
          writePost={false}
        />
        <Text style={styles.nextLiveText}>Your Next Live Classes</Text>
        {createClassCards(classesMockData, navigation)}
      </View>
      <View style={{flex: 1, backgroundColor: '#F4F5F6'}}>
        <View style={styles.classHappeningHeader}>
          <Image source={cameraImg} style={styles.icon} />
          <Text style={styles.happingNowText}>Classes Happening Now</Text>
        </View>
        {createClassCards(classesMockData, navigation)}
      </View>
      <View style={{flex: 1, paddingTop: 20, backgroundColor: '#F4F5F6'}}>
        <Text style={styles.recommandedText}>Recommended Classes</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            alignItems: 'center',
            paddingTop: 8,
          }}>
          <Text style={styles.intestedText}>I’m interested in...</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.allClassesText}>All Classes</Text>
            <Image style={styles.icon} source={arrowImg} />
          </View>
        </View>
        <ImageTile props={navigation} />
      </View>
    </ScrollView>
  </View>
);

export default HomeScreen;
