import {StyleSheet, Platform} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 34,
    paddingBottom: 32,
  },
  notifHeaderText: {
    fontWeight: 'bold',
    color: '#334E68',
    lineHeight: 19,
    fontSize: 15,
    letterSpacing: -0.3,
    fontFamily: fontFamily.book,
  },
});

export default styles;
