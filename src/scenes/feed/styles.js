import { StyleSheet } from 'react-native';
import { Spacing, Typography, Colors } from '_styles';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  headerAndStatsContainer: {
    paddingHorizontal: Spacing.base,
  },
  statsContainer: {
    height: 'auto',
    backgroundColor: Colors.sirius,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: Spacing.small,
  },
  backgroundStatContainer: {
    top: -13,
    zIndex: -1,
    height: 20,
    backgroundColor: Colors.aquarius,
    borderRadius: 10,
    marginHorizontal: Spacing.base,
  },
  statDetailContainer: {
    width: '40%',
  },
  statNumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.smaller,
  },
  iconContainer: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.smaller,
  },
  statTextContainer: {
    width: '75%',
  },
  rightMargin: {
    marginRight: Spacing.small,
  },
  classCount: {
    ...Typography.h1,
    color: Colors.white,
  },
  headerMargin: {
    marginLeft: Spacing.base,
    marginTop: Spacing.base,
    marginBottom: Spacing.small,
  },
});

export default styles;
