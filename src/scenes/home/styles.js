import {StyleSheet} from 'react-native';
import {Icons, Spacing, Typography, Colors} from '_styles';

const Styles = StyleSheet.create({
  icon: {
    ...Icons.normal,
  },
  lightSectionHeader: {
    ...Typography.h3,
    color: Colors.white,
    paddingLeft: Spacing.base,
  },
  topSectionContainer: {
    flex: 1,
    backgroundColor: Colors.sirius,
  },
  headerContainer: {
    paddingHorizontal: Spacing.base,
    backgroundColor: Colors.sirius,
  },
  lightBackgroundContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  classHappeningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.large,
    paddingLeft: Spacing.base,
  },
  lightTextHeader: {
    ...Typography.h3,
    color: Colors.white,
    paddingLeft: Spacing.base,
  },
  classFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.base,
  },
  recommandedText: {
    ...Typography.p1,
    color: Colors.aquarius,
    textTransform: 'uppercase',
  },
  h3d2: {
    ...Typography.h3,
    color: Colors.white,
  },
  filterSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h3a1: {
    ...Typography.h3,
    color: Colors.andromeda,
  },
  iconNormal: {
    ...Icons.normal,
  },
  iconSmall: {
    ...Icons.small,
  },
  filterBtn: {
    width: 48,
    height: 47,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    marginBottom: Spacing.small,
    marginRight: Spacing.small,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },
});

export default Styles;
