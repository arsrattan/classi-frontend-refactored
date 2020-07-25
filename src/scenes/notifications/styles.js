import { StyleSheet, Platform } from 'react-native';
import { Colors, Spacing } from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    paddingTop: Platform.OS === 'ios' ? 60 : 0,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Spacing.large,
  },
});

export default styles;
