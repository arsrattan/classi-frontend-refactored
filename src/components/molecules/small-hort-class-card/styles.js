import {StyleSheet} from 'react-native';
import {Spacing} from '_styles';

const styles = StyleSheet.create({
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
