import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Icons, Spacing} from '_styles';
import {Typography, Colors} from '_styles';

const Styles = StyleSheet.create({
  icon: {
    ...Icons.normal,
  },
  homeContainer: {},
  lightSectionHeader: {
    ...Typography.h3,
    color: Colors.white,
    paddingLeft: Spacing.base,
  },
  topSectionContainer: {
    flex: 1,
    backgroundColor: Colors.aquarius,
  },
  headerContainer: {
    paddingHorizontal: Spacing.base,
    backgroundColor: Colors.aquarius,
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
  darkTextHeader: {
    ...Typography.h3,
    color: Colors.aquarius,
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
    color: Colors.aries,
  },
  filterSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h3a1: {
    ...Typography.h3,
    color: Colors.andromeda,
  },
});

export default Styles;
