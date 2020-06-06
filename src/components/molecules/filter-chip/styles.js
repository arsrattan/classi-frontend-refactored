import {StyleSheet} from 'react-native';
import {Typography, Colors, Spacing} from '_styles';

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.smaller,
    marginVertical: Spacing.tiny,
    marginRight: Spacing.smaller,
    borderRadius: 18,
  },
  tagText: {
    ...Typography.p1,
    color: Colors.aries,
  },
});

export default styles;
