import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  seeMore: {
    // paddingTop: 10,
    fontFamily: fontFamily.book,
    fontSize: 15,
    lineHeight: 19,
    letterSpacing: -0.3,
    color: '#3A5CDB',
  },
  seeMoreBorder: {
    marginHorizontal: '32%',
    borderWidth: 0.7,
    borderColor: '#3A5CDB',
    marginTop: 4,
  },
  viewDivider: {height: 15, backgroundColor: '#f9f9f9', marginTop: 20},
});

export default styles;
