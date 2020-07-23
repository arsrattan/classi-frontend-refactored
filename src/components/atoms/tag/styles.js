import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacing } from '_styles';

const styles = StyleSheet.create({
  tagStyle: {
    paddingHorizontal: Spacing.smaller,
    paddingVertical: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    ...Typography.p2,
    color: Colors.white,
  },
});

export default styles;
