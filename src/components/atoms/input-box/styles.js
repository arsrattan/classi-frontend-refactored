import {StyleSheet} from 'react-native';
import {Colors, Icons, Spacing, Typography} from '_styles';

const styles = StyleSheet.create({
  writeCommentView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderRadius: 10,
    paddingLeft: Spacing.small,
    paddingVertical: Spacing.smaller,
    marginRight: Spacing.small,
  },
  icon: {
    ...Icons.small,
    marginRight: Spacing.small,
  },
});

export default styles;
