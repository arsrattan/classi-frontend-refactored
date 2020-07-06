import {StyleSheet} from 'react-native';
import {Spacing, Colors} from '_styles';

const styles = StyleSheet.create({
  cardBackground: {
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderRadius: 10,
    padding: Spacing.smaller,
  },
  flexRow: {
    flexDirection: 'row',
  },
  classTile: {
    flex: 1,
    paddingHorizontal: Spacing.small,
  },
  classPicture: {
    height: 'auto',
    width: '25%',
    borderRadius: 5,
  },
  classDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.smallest,
  },
});

export default styles;
