import { StyleSheet } from 'react-native';
import { Spacing, Typography, Colors } from '_styles';

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
  },
  commentTile: {
    backgroundColor: Colors.grey,
    borderRadius: 10,
    width: '85%',
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.smaller,
    marginLeft: Spacing.smaller,
    marginBottom: Spacing.small,
  },
  commentTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    ...Typography.p1,
    color: Colors.aquarius,
  },
  commentText: {
    ...Typography.p2,
    color: Colors.aries,
  },
  commentDateAndTime: {
    ...Typography.p2,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.aries,
    marginLeft: Spacing.small,
  },
});

export default styles;
