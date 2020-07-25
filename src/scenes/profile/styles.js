import { StyleSheet, Platform } from 'react-native';
import { Typography, Icons, Spacing, Colors } from '_styles';

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
    paddingTop: Spacing.smaller,
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
  dropDown: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F0F1F3',
    height: 32,
    width: 121,
    borderRadius: 5,
    flexDirection: 'row',
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
});

export default styles;
