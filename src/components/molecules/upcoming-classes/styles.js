import { StyleSheet } from 'react-native';
import { Spacing, Typography, Colors } from '_styles';

const Styles = StyleSheet.create({
  lightSectionHeader: {
    ...Typography.h3,
    color: Colors.white,
    paddingLeft: Spacing.base,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.sirius,
  },
});

export default Styles;
