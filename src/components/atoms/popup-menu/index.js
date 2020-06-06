import * as React from 'react';
import {View, Text, Alert, TouchableOpacity, Image} from 'react-native';
import {Tooltip} from 'react-native-elements';
import {menuImg, unregisterImg, shareImgDark} from '_assets';
import styles from './styles';

const PopoverMenu = () => {
  return (
    <View style={styles.popupContainer}>
      <Tooltip
        pointerColor="#fff"
        overlayColor="rgba(52, 52, 52, 0.8)"
        toggleOnPress={true}
        containerStyle={styles.tooltipStyle}
        popover={
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Shared');
              }}
              style={styles.optionTile}>
              <Image source={shareImgDark} style={styles.icon} />
              <Text style={styles.p1dark1}>Share Class</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Unregistered');
              }}
              style={styles.optionTile}>
              <Image source={unregisterImg} style={styles.icon} />
              <Text style={styles.p1accent1}>Unregister Class</Text>
            </TouchableOpacity>
          </View>
        }>
        <Image source={menuImg} style={styles.icon} />
      </Tooltip>
    </View>
  );
};
export default PopoverMenu;
