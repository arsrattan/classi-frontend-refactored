import {StyleSheet} from 'react-native';
import {Typography, Colors, Spacing} from '_styles';

const styles = StyleSheet.create({
  followBtn: {
    paddingVertical: Spacing.smallest,
    paddingHorizontal: Spacing.base,
    borderColor: Colors.andromeda,
    borderWidth: 1,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followingBtn: {
    paddingVertical: Spacing.smallest,
    paddingHorizontal: Spacing.base,
    borderColor: Colors.andromeda,
    backgroundColor: Colors.andromeda,
    borderWidth: 1,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followTxt: {
    ...Typography.p1,
    color: Colors.andromeda,
  },
  followingTxt: {
    ...Typography.p1,
    color: Colors.white,
  },
});

export default styles;
