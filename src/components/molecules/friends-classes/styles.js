import { StyleSheet } from 'react-native';
import { Spacing, Colors } from '_styles';

const Styles = StyleSheet.create({
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
});

export default Styles;
