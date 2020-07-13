import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Divider, Dot, ProfileImg, PopupMenu, MenuTile} from '_atoms';
import {Colors, Typography, Spacing} from '_styles';
import styles from './styles';
import {menuImg, shareImgDark, unregisterImg} from '_assets';

export const SmallHortClassCard = ({navigation, hasBackground, style}) => {
  let cardBackground;
  if (hasBackground) {
    cardBackground = styles.cardBackground;
  }
  return (
    <TouchableOpacity style={{...cardBackground, ...style}} onPress={() => {}}>
      <View style={styles.flexRow}>
        <Image
          source={{uri: 'https://placebeard.it/640x360'}}
          style={styles.classPicture}
        />
        <View style={styles.classTile}>
          <Text
            style={{...Typography.p1d1, ...Typography.medium}}
            numberOfLines={2}>
            Easy & Healthy Morning Omlette Yoga
          </Text>
          <View style={styles.classDetailContainer}>
            <Text style={Typography.p3d3}>{'wed, apr 22'.toUpperCase()}</Text>
            <Dot size="base" color={Colors.aries} />
            <Text style={Typography.p3d3}>{'6:30pm'.toUpperCase()}</Text>
            <Dot size="base" color={Colors.aries} />
            <Text style={Typography.p3d3}>{'30 mins'.toUpperCase()}</Text>
          </View>
        </View>
        <PopupMenu
          icon={menuImg}
          options={[
            <MenuTile icon={shareImgDark} text="Share class" />,
            <MenuTile icon={unregisterImg} text="Unregister class" />,
          ]}
        />
      </View>
      {!hasBackground ? (
        <Divider
          color={Colors.grey}
          style={{marginVertical: Spacing.smaller}}
        />
      ) : (
        <View />
      )}
    </TouchableOpacity>
  );
};

export default SmallHortClassCard;
