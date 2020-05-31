import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  commentTile: {
    backgroundColor: '#F0F1F3',
    borderRadius: 10,
    width: '85%',
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  userName: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: 'normal',
    color: '#102A43',
    fontFamily: fontFamily.book,
  },
  commentText: {
    fontSize: 13,
    lineHeight: 15,
    fontWeight: 'normal',
    color: '#334E68',
    paddingTop: 7,
    fontFamily: fontFamily.book,
  },
  commentDateAndTime: {
    paddingLeft: 10,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1,
    color: '#334e68',
    textTransform: 'uppercase',
    fontFamily: fontFamily.book,
  },
});

export default styles;
