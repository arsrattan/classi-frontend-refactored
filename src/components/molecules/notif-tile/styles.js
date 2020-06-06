import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Typography, Spacing, Colors} from '_styles';

const styles = StyleSheet.create({
  notifContainer: {
    flexDirection: 'row',
  },
  notifContentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: Spacing.small,
    paddingTop: Spacing.hairline,
  },
  userNameText: {
    ...Typography.p1,
    color: Colors.aquarius,
    paddingRight: Spacing.smaller,
  },
  dateText: {
    paddingTop: Spacing.smaller,
    color: Colors.aries,
    ...Typography.p2,
  },
  dividerView: {
    borderWidth: 1,
    borderColor: Colors.grey,
    marginVertical: Spacing.base,
  },
});

export default styles;
