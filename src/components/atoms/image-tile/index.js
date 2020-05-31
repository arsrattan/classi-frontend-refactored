import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {fontFamily, seeImg, loveImg} from '_assets';
import {classesOverviewData} from '_utils';

const ImageTile = (props) => {
  return (
    <View style={{paddingHorizontal: 16}}>
      {classesOverviewData.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Class', {
                classDetails: item,
                isWatching: true,
              });
            }}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              source={{
                uri: item.url,
              }}
              style={{
                height: 216,
                width: '100%',
                marginTop: 16,
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  width: '40%',
                  height: '40%',
                  marginLeft: 16,
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 17,
                    lineHeight: 22,
                    letterSpacing: -0.3,
                    color: '#fff',
                    fontFamily: fontFamily.book,
                  }}>
                  {item.className}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    lineHeight: 16,
                    letterSpacing: 0.5,
                    color: '#fff',
                    paddingTop: 8,
                    fontFamily: fontFamily.book,
                  }}>
                  {`By ${item.classBy}`}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    alignItems: 'center',
                  }}>
                  <Image source={seeImg} width={20} height={20} />
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 13,
                      lineHeight: 16,
                      paddingLeft: 8,
                      fontFamily: fontFamily.book,
                    }}>
                    2459
                  </Text>
                  <Image source={loveImg} style={{marginLeft: 18}} />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 13,
                      lineHeight: 16,
                      paddingLeft: 5,
                      fontFamily: fontFamily.book,
                    }}>
                    2459
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ImageTile;
