import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  notifContentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 12,
    paddingTop: 2,
  },
  userNameText: {
    color: '#102A43',
    fontSize: 15,
    lineHeight: 19,
    fontFamily: fontFamily.book,
    paddingRight: 5,
  },
  dateText: {
    paddingTop: 8,
    color: 'rgba(51, 78, 104, 0.8)',
    fontSize: 13,
    lineHeight: 16,
    fontFamily: fontFamily.book,
  },
  dividerView: {
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    marginVertical: 16,
  },
});

export default styles;
