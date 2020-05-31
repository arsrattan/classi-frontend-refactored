import { StyleSheet } from 'react-native';
import { fontFamily } from '_assets';

const styles = StyleSheet.create({
  feedCard: {
    width: 163,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingTop: 44,
  },
  feedCardImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: -25,
  },
  instructorName: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: '#102A43',
    fontFamily: fontFamily.book,
  },
  tagAndText: {
    paddingTop: 4,
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#334E68',
    fontFamily: fontFamily.book,
  },
  boldCount: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#334E68',
    fontFamily: fontFamily.book,
  },
  upcomingClassContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FAFAFC',
    height: 32,
    width: 164,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

export default styles;