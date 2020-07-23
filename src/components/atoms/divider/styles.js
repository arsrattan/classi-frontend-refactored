import { StyleSheet } from 'react-native';
import { Spacing, Colors } from '_styles';

const styles = StyleSheet.create({
  dividerView: {
    borderWidth: 1,
    borderColor: Colors.grey,
    marginTop: Spacing.smaller,
  },
  dividerViewBase: {
    borderWidth: 1,
    marginVertical: Spacing.base,
  },
});

export default styles;
