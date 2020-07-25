import { StyleSheet } from 'react-native';
import { Typography, Spacing, Colors, Icons } from '_styles';

const styles = StyleSheet.create({
  iconNormal: {
    ...Icons.normal,
  },
  iconSmall: {
    ...Icons.small,
  },
  headerPadding: {
    marginHorizontal: Spacing.base,
  },
  rightPadding: {
    paddingRight: Spacing.base,
  },
  screenContainer: {
    flex: 1,
  },
  browseContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingLeft: Spacing.base,
  },
  browseHeaderText: {
    ...Typography.h1,
    color: Colors.aquarius,
  },
  searchAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    justifyContent: 'space-between',
    width: '84%',
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
  filterChipText: {
    ...Typography.p2,
    textTransform: 'capitalize',
  },
  h3d2: {
    ...Typography.h3,
    color: Colors.aries,
  },
  allClassText: {
    paddingTop: 10,
    ...Typography.h3,
    color: Colors.aries,
    ...Typography.medium,
  },
});

export default styles;
