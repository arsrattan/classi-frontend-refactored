import { StyleSheet } from 'react-native';
import { Colors, Icons, Spacing, Typography } from '_styles';

const styles = StyleSheet.create({
  iconNormal: {
    ...Icons.normal,
  },
  p1d2: {
    ...Typography.p1,
    color: Colors.aries,
  },
  p1d1: {
    ...Typography.p1,
    color: Colors.aquarius,
  },
  filterButtonText: {
    marginVertical: Spacing.smaller,
    marginHorizontal: Spacing.larger,
    ...Typography.p1,
    color: Colors.white,
  },
  modalScreenContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 140,
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: Spacing.base,
  },
  modalHeaderText: {
    ...Typography.h1,
    color: Colors.aquarius,
    textAlign: 'center',
    paddingVertical: Spacing.larger,
  },
  closeIcon: {
    position: 'absolute',
    top: Spacing.larger,
  },
  sectionHeaderText: {
    ...Typography.h3,
    color: Colors.aquarius,
    marginTop: Spacing.smaller,
    marginBottom: Spacing.base,
  },
  radioButtonSelected: {
    marginLeft: 10,
    backgroundColor: Colors.andromeda,
    borderRadius: 40,
  },
  radioButtonUnselected: {
    marginLeft: 10,
    backgroundColor: Colors.grey,
    borderRadius: 40,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: Spacing.largest,
  },
  filterButton: {
    backgroundColor: Colors.andromeda,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
