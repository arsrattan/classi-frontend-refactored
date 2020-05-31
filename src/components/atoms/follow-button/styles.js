import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  followBtn: {
    marginTop: 16,
    height: 25,
    width: 71,
    borderColor: '#F86A6A',
    borderWidth: 1,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followTxt: {
    fontFamily: fontFamily.book,
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: '#F86A6A',
  },
});

export default styles;
