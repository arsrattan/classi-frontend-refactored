import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {fontFamily, seeImg, loveImg} from '_assets';
import {classesOverviewData} from '_utils';
import styles from './styles';

const ImageTile = (props) => {
  return (
    <View style={styles.tileContainer}>
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
              style={styles.imageStyle}>
              <View style={styles.textContainer}>
                <Text style={styles.classNameText}>{item.className}</Text>
                <Text style={styles.additionalClassDetailsText}>
                  {`By ${item.classBy}`}
                </Text>
                <View style={styles.iconContainer}>
                  <View style={styles.iconGroup}>
                    <Image source={seeImg} style={styles.icon} />
                    <Text style={styles.additionalClassDetailsText}>2459</Text>
                  </View>
                  <Image source={loveImg} style={styles.icon} />
                  <Text style={styles.additionalClassDetailsText}>2459</Text>
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
