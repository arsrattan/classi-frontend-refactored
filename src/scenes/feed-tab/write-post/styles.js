import {StyleSheet} from 'react-native';
import {Icons, Spacing, Typography, Colors} from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.base,
    backgroundColor: Colors.white,
  },
  closeImageContainer: {
    backgroundColor: Colors.leo,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: Spacing.smaller,
    margin: Spacing.smaller,
  },
  uploadImageContainer: {
    height: 100,
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: Colors.cassiopeia,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
