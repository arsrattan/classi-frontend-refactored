import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacing } from '_styles';

const styles = StyleSheet.create({
  classContainer: {
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderRadius: 10,
    padding: Spacing.smaller,
    flexDirection: 'row',
  },
  classPicture: {
    width: 150,
    height: (150 * 9) / 16,
    borderRadius: 5,
  },
  textContainer: {
    paddingLeft: Spacing.small,
    paddingTop: Spacing.tiny,
  },
  classNameText: {
    ...Typography.p1,
    color: Colors.aquarius,
  },
  instructorText: {
    ...Typography.p1,
    color: Colors.aries,
    paddingTop: Spacing.tiny,
  },
  dateText: {
    ...Typography.p2,
    color: Colors.aries,
    paddingTop: Spacing.tiny,
  },
});

export default styles;
