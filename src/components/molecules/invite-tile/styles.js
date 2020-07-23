import { StyleSheet } from 'react-native';
import { Typography, Spacing, Colors } from '_styles';

const styles = StyleSheet.create({
  notifContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notifContentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: Spacing.small,
    paddingTop: Spacing.hairline,
  },
  userNameText: {
    ...Typography.p1,
    color: Colors.aquarius,
    paddingRight: Spacing.smaller,
  },
  dateText: {
    paddingTop: Spacing.smaller,
    color: Colors.aries,
    ...Typography.p2,
  },
  dividerView: {
    borderWidth: 1,
    borderColor: Colors.grey,
    marginVertical: Spacing.base,
  },
  invitedButton: {
    paddingVertical: Spacing.smallest,
    paddingHorizontal: Spacing.base,
    borderColor: Colors.andromeda,
    backgroundColor: Colors.andromeda,
    borderWidth: 1,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invitedText: {
    ...Typography.p1,
    color: Colors.white,
  },
  inviteButton: {
    paddingVertical: Spacing.smallest,
    paddingHorizontal: Spacing.base,
    borderColor: Colors.andromeda,
    borderWidth: 1,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteText: {
    ...Typography.p1,
    color: Colors.andromeda,
  },
});

export default styles;
