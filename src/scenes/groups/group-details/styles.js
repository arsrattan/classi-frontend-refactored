import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
  },
  sectionContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    marginBottom: Spacing.base,
  },
  sectionContainerNoMargin: {
    backgroundColor: Colors.white,
    marginBottom: Spacing.base,
  },
});

export default styles;
