import {StyleSheet} from 'react-native';
import {Colors, Icons, Spacing} from '_styles';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  writeCommentView: {
    height: 50,
    width: '70%',
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: Spacing.small,
    marginRight: Spacing.small,
  },
  iconLarger: {
    ...Icons.larger,
  },
});

export default styles;
