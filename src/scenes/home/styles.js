import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Icons, Spacing} from '_styles';

const Styles = StyleSheet.create({
  icon: {
    ...Icons.normal,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nextLiveText: {
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.3,
    color: '#fff',
    fontSize: 17,
    paddingLeft: 16,
    fontFamily: fontFamily.book,
  },
  happingNowText: {
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.3,
    color: '#102A43',
    fontSize: 17,
    paddingLeft: 8,
    fontFamily: fontFamily.book,
  },
  recommandedText: {
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 1,
    color: '#102A43',
    fontSize: 13,
    paddingLeft: 16,
    textTransform: 'uppercase',
    fontFamily: fontFamily.book,
  },
  intestedText: {
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.3,
    color: '#102A43',
    fontSize: 19,
    fontFamily: fontFamily.book,
  },
  allClassesText: {
    alignSelf: 'center',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.3,
    color: '#F86A6A',
    fontSize: 19,
    fontFamily: fontFamily.book,
  },
  classHappeningHeader: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
  cameraIcon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#FFE2E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
