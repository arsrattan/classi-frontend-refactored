import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '_styles';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: Spacing.base,
    paddingTop: 60,
    backgroundColor: Colors.white,
  },
  backArrow: {
    position: 'absolute',
    left: 0,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.larger,
  },
});

export default styles;
