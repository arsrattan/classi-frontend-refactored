import React from 'react';
import {View, Text, StatusBar, ScrollView, Image, FlatList} from 'react-native';
import styles from './styles';
import {HomeHeader} from '_molecules';
import {ImageTile} from '_atoms';
import {cameraImg, arrowImg} from '_assets';
import {classesMockData, createClassCards} from '_utils';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    {StatusBar.setBarStyle('light-content', true)}
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={{flex: 1, paddingTop: 20, backgroundColor: '#1E2432'}}>
        <HomeHeader navigation={navigation} />
        <Text style={styles.nextLiveText}>Your Next Live Classes</Text>
        {createClassCards(classesMockData, navigation)}
      </View>
      <View style={{flex: 1, backgroundColor: '#F4F5F6'}}>
        <View style={styles.classHappeningHeader}>
          <Image source={cameraImg} />
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
          }}>
          <Text style={styles.intestedText}>I’m interested in...</Text>
          <Text style={styles.allClassesText}>All Classes</Text>
          <Image
            style={{position: 'absolute', right: 25, top: 18}}
            source={arrowImg}
          />
        </View>
        <ImageTile props={navigation} />
      </View>
    </ScrollView>
  </View>
);

export default HomeScreen;
