import {StyleSheet} from 'react-native';
import {Colors, Icons, Spacing, Typography} from '_styles';

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.base,
  },
  tileText: {
    ...Typography.p1,
    color: Colors.aries,
  },
});

export default styles;
