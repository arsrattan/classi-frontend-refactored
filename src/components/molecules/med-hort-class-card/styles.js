import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacing } from '_styles';

const styles = StyleSheet.create({
  classContainer: {
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderRadius: 10,
    height: 106,
    padding: Spacing.smaller,
    flexDirection: 'row',
  },
  classPicture: {
    height: 'auto',
    width: '30%',
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
