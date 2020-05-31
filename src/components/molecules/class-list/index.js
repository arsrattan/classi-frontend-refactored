import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {fontFamily} from '_assets';
import {classesMockData} from '_utils';

const ClassList = ({navigation, classBy}) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <FlatList
        numColumns={2}
        data={classesMockData}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, paddingTop: 16}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Class', {classDetails: item});
                }}
                style={[
                  styles.cardContainer,
                  {
                    borderRadius: 0,
                    width: 163,
                    height: 260,
                    marginHorizontal: 0,
                  },
                ]}>
                <View style={[styles.cardHeader, {height: '20%'}]}>
                  <Image
                    style={{borderRadius: 15}}
                    source={{
                      uri: item.url,
                      width: 30,
                      height: 31,
                    }}
                  />
                  <View style={{paddingLeft: 10}}>
                    <Text style={styles.classBy}>
                      {classBy ? classBy : item.classBy}
                    </Text>
                    <Text style={styles.post}>{item.post}</Text>
                  </View>
                </View>

                <View style={{height: '40%'}}>
                  <ImageBackground
                    source={{
                      uri: item.url,
                    }}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'cover'}>
                    <View style={styles.durationContainer}>
                      <Text style={styles.durationText}>30 mint</Text>
                    </View>
                    <View style={styles.dateTag}>
                      <Text style={styles.date}>26</Text>
                      <Text style={styles.month}>Apr</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{paddingTop: 10, paddingLeft: 12}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '500',
                      lineHeight: 22,
                      letterSpacing: -0.3,
                      fontFamily: fontFamily.book,
                    }}>
                    {item.className}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 15,
                      color: '#334E68',
                      paddingTop: 8,
                      fontFamily: fontFamily.book,
                    }}>
                    {item.dateAndTime}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 15,
                      color: '#334E68',
                      paddingTop: 8,
                      fontFamily: fontFamily.book,
                    }}>
                    {item.registered}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
};
export default ClassList;
