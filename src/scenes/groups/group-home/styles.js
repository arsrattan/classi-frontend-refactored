import { StyleSheet } from 'react-native';
import { fontFamily } from '_assets';
import { Typography, Spacing, Colors, Icons } from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  horizontalPadding: {
    marginHorizontal: Spacing.base,
  },
  groupsContainer: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.base,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
