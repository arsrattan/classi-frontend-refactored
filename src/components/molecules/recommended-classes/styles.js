import { StyleSheet } from 'react-native';
import { Spacing, Typography, Colors, Icons } from '_styles';

const Styles = StyleSheet.create({
  lightBackgroundContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  lightSectionHeader: {
    ...Typography.h3,
    color: Colors.white,
    paddingLeft: Spacing.base,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.sirius,
  },
  sectionHeader: {
    ...Typography.p3,
    color: Colors.aries,
    marginLeft: Spacing.base,
    letterSpacing: 1,
  },
  interestedText: { ...Typography.h3, color: Colors.aquarius },
  arrowIcon: { ...Icons.normal },
  filterSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h3a1: {
    ...Typography.h3,
    color: Colors.andromeda,
  },
  classFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.base,
  },
});

export default Styles;
