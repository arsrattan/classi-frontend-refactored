import { StyleSheet, Platform } from 'react-native';
import { Spacing, Colors, Icons, Typography } from '_styles';

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    paddingBottom: Spacing.base,
  },
  smallIcon: {
    ...Icons.small,
  },
  normalIcon: {
    ...Icons.normal,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    ...Typography.p1,
    color: Colors.white,
  },
  accentText: {
    ...Typography.p1,
    color: Colors.andromeda,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postIconStyle: {
    paddingRight: Spacing.small,
  },
});
export default styles;
