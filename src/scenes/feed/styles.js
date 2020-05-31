import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  feedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 34,
    paddingHorizontal: 16,
  },
  statsContainer: {
    marginTop: 18,
    height: 113,
    backgroundColor: '#1E2432',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  statDetailContainer: {
    borderRadius: 10,
    width: '50%',
    backgroundColor: '#1E2432',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingLeft: 6,
    paddingRight: 40,
  },
  iconContainer: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classCount: {
    fontFamily: fontFamily.book,
    fontSize: 30,
    lineHeight: 38,
    letterSpacing: -0.3,
    color: '#FFFFFF',
  },
  classInfoText: {
    fontFamily: fontFamily.book,
    paddingTop: 5,
    fontSize: 15,
    lineHeight: 19,
    letterSpacing: -0.3,
    color: '#FFFFFF',
  },
  heading: {
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 25,
    color: '#102A43',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.3,
    fontWeight: '500',
    fontFamily: fontFamily.book,
  },
});

export default styles;
