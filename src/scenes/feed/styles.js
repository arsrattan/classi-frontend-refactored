import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Spacing, Typography, Colors} from '_styles';

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
    backgroundColor: Colors.aquarius,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.small,
  },
  statDetailContainer: {
    borderRadius: 10,
    width: '45%',
    backgroundColor: '#1E2432',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
