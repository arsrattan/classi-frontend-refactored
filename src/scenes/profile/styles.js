import {StyleSheet, Platform} from 'react-native';
import {fontFamily} from '_assets';
import {Typography, Icons, Spacing, Colors} from '_styles';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  backArrow: {
    position: 'absolute',
    left: Spacing.base,
  },
  colorContainer: {
    paddingTop: 60 - Spacing.base,
    backgroundColor: Colors.white,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: Spacing.base,
  },
  logoutAndShare: {
    position: 'absolute',
    right: Spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileView: {
    paddingTop: Spacing.larger,
    paddingHorizontal: Spacing.base,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.smallest,
  },
  sectionContainer: {
    marginTop: Spacing.base,
    paddingTop: Spacing.base,
    paddingHorizontal: Spacing.base,
    backgroundColor: Colors.white,
  },
  showMoreButton: {
    alignItems: 'center',
    marginBottom: Spacing.small,
  },

  userName: {
    color: '#102A43',
    fontSize: 19,
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: fontFamily.book,
  },
  bio: {
    paddingTop: 6,
    fontSize: 15,
    lineHeight: 19,
    color: '#334E68',
    fontFamily: fontFamily.book,
  },
  boldNumber: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily: fontFamily.book,
    color: '#334E68',
  },
  followerText: {
    fontSize: 15,
    lineHeight: 19,
    fontFamily: fontFamily.book,
    color: '#334E68',
  },
  editProfileBtn: {
    marginTop: 16,
    height: 41,
    width: 100,
    borderColor: '#F86A6A',
    borderWidth: 1,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileText: {
    fontFamily: fontFamily.book,
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: '#F86A6A',
  },

  dividerView: {
    height: 15,
    backgroundColor: '#f9f9f9',
    marginTop: 20,
  },
  activityContainer: {
    justifyContent: 'space-between',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityText: {
    fontFamily: fontFamily.book,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: '#334E68',
    fontWeight: 'bold',
  },
  dropDown: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F0F1F3',
    height: 32,
    width: 121,
    borderRadius: 5,
    flexDirection: 'row',
  },
  upcomingAndSaved: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.3,
    color: '#102A43',
    fontFamily: fontFamily.book,
    paddingLeft: 16,
  },
  yourPost: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.3,
    color: '#102A43',
    fontFamily: fontFamily.book,
    paddingTop: 16,
    paddingLeft: 16,
  },
  showAll: {
    fontSize: 15,
    lineHeight: 19,
    fontFamily: fontFamily.book,
    letterSpacing: -0.3,
    color: '#3A5CDB',
    textDecorationLine: 'underline',
  },
  classTitle: {
    fontWeight: 'bold',
    color: '#102A43',
    fontSize: 15,
    lineHeight: 19,
    fontFamily: fontFamily.book,
  },
  dateAndTime: {
    color: 'rgba(51, 78, 104, 0.8)',
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fontFamily.book,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  seprationLine: {
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    marginVertical: 20,
  },
  classContainer: {
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  classTile: {
    flex: 1,
    paddingLeft: 12,
    paddingTop: 2,
  },
  aboutMeText: {
    fontWeight: 'bold',
    color: '#334E68',
    lineHeight: 19,
    fontSize: 15,
    letterSpacing: -0.3,
    fontFamily: fontFamily.book,
  },
});

export default styles;
