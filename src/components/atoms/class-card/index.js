import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {ProfileImg, Tag} from '_atoms';
import {Colors} from '_styles';
import PopupMenu from '../popup-menu';
import {menuImg, unregisterImg, shareImgDark} from '_assets';
import MenuTile from '../menu-tile';
import styles from './styles';

const ClassCard = ({navigation, item, showLive, popular, style}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Class', {classDetails: item});
      }}
      style={[styles.cardContainer, {style}]}>
      <View style={styles.cardHeader}>
        <View style={{flexDirection: 'row'}}>
          <ProfileImg size="small" />
          <View style={styles.instructorTextContainer}>
            <Text style={styles.p1dark1}>{item.classBy}</Text>
            <Text style={styles.p2dark2}>{item.post}</Text>
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

      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: item.url,
          }}
          style={styles.image}
          resizeMode={'cover'}>
          <View style={styles.tagContainer}>
            <Tag color={Colors.aquarius} text={item.duration} />
            {showLive && <Tag color={Colors.livePink} text="Live" />}
          </View>
          <View style={styles.dateTag}>
            <Text style={styles.date}>26</Text>
            <Text style={styles.month}>Apr</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.classDetailContainer}>
        <Text style={styles.classNameText}>{item.className}</Text>
        <Text style={styles.dateAndTime}>{item.dateAndTime}</Text>
        <Text style={styles.dateAndTime}>{item.registered}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClassCard;
