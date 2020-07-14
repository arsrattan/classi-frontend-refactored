import {StyleSheet} from 'react-native';
import {Colors, Icons, Spacing, Typography} from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  backButtonStyle: {
    position: 'absolute',
    top: 60,
    left: Spacing.base,
  },
  inviteHeaderText: {
    alignSelf: 'center',
    color: Colors.aries,
    ...Typography.h3,
    marginTop: 60,
  },
  topSectionContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    marginBottom: Spacing.base,
    paddingBottom: Spacing.base,
  },
  sectionContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    marginBottom: Spacing.base,
    paddingBottom: Spacing.base,
  },
  sectionContainerPadded: {
    backgroundColor: Colors.white,
    padding: Spacing.base,
    marginBottom: Spacing.base,
  },
  classCardContainer: {
    marginTop: Spacing.larger,
  },
  copyLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.smallest,
  },
});

export default styles;
