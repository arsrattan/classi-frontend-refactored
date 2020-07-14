import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Spacing.base,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: Spacing.small,
  },
  flexRow: {
    flexDirection: 'row',
  },
  groupHeaderText: {
    flex: 1,
    paddingLeft: Spacing.small,
    paddingTop: Spacing.hairline,
    paddingRight: 60,
  },
  upcomingClassesContainer: {
    marginTop: Spacing.base,
  },
  classPicture: {
    height: 100,
    width: 150,
    borderRadius: 5,
    marginRight: Spacing.smaller,
  },
});

export default styles;
