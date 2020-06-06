import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Typography, Colors, Icons} from '_styles';

const styles = StyleSheet.create({
  p1dark1: {
    ...Typography.p1,
    ...Colors.dark2,
    paddingLeft: 13,
  },
  p1accent1: {
    ...Typography.p1,
    ...Colors.accent1,
    paddingLeft: 13,
  },
  icon: {
    ...Icons.small,
  },
  popupContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tooltipStyle: {
    width: 180,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  optionTile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
