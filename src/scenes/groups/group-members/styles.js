import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Typography, Spacing, Colors, Icons} from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  sectionContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    marginBottom: Spacing.base,
  },
  copyLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.smallest,
  },
  sectionContainerPadded: {
    backgroundColor: Colors.white,
    padding: Spacing.base,
    marginBottom: Spacing.base,
  },
});

export default styles;
