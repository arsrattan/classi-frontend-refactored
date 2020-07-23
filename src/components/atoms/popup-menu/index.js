import * as React from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { menuImg, unregisterImg, shareImgDark } from '_assets';
import styles from './styles';
import { Icons } from '_styles';
import MenuTile from '../menu-tile';

const PopupMenu = ({ icon, options }) => {
  return (
    <View style={styles.popupContainer}>
      <Tooltip
        pointerColor="#fff"
        overlayColor="rgba(52, 52, 52, 0.8)"
        toggleOnPress={true}
        containerStyle={styles.tooltipStyle}
        popover={
          <View style={styles.optionsContainer}>{options.map((x) => x)}</View>
        }>
        <Image source={icon} style={Icons.small} />
      </Tooltip>
    </View>
  );
};
export default PopupMenu;
