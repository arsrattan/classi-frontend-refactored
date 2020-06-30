import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Divider, Dot, ProfileImg, PopupMenu, MenuTile} from '_atoms';
import {Colors, Typography} from '_styles';
import styles from './styles';
import {Spacing} from '_styles';
import {menuImg, shareImgDark, unregisterImg} from '_assets';

export const SmallHortClassCard = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.flexRow}>
        <Image
          source={{uri: 'https://placebeard.it/640x360'}}
          style={styles.classPicture}
        />
        <View style={styles.classTile}>
          <Text style={Typography.p1d1} numberOfLines={1}>
            Easy & Healthy Morning Omlette Yoga
          </Text>
          <View style={styles.classDetailContainer}>
            <Text style={Typography.p1d2}>wed, apr 22</Text>
            <Dot size="base" color={Colors.aries} />
            <Text style={Typography.p1d2}>6:30pm</Text>
            <Dot size="base" color={Colors.aries} />
            <Text style={Typography.p1d2}>30 mins</Text>
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
      <Divider color={Colors.grey} style={{marginVertical: Spacing.smaller}} />
    </TouchableOpacity>
  );
};

export default SmallHortClassCard;
