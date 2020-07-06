import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors} from '_styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numProfilesCircle: {
    left: -15 * 3,
    backgroundColor: Colors.andromeda,
    borderWidth: 3,
    borderColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    ...Typography.p1,
    color: Colors.aries,
    paddingLeft: Spacing.smallest,
  },
});

export default styles;
