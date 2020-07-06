import {StyleSheet} from 'react-native';
import fontFamily from '../../assets/fonts/fontFamily';
import {Spacing, Typography, Colors, Icons} from '_styles';

const styles = StyleSheet.create({
  iconNormal: {
    ...Icons.normal,
  },
  iconSpace: {
    ...Icons.normal,
    marginRight: Spacing.smallest,
  },
  h1d1: {
    ...Typography.h1,
    color: Colors.aquarius,
  },
  p1d2: {
    ...Typography.p1,
    color: Colors.aries,
  },
  p1white: {
    ...Typography.p1,
    color: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  classImage: {
    height: 250,
    width: '100%',
  },
  tagContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: Spacing.base,
    left: Spacing.base,
  },
  classMetadataContainer: {
    flex: 1,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    backgroundColor: Colors.white,
  },
  schedulerTimeContainer: {
    paddingTop: Spacing.base,
    flexDirection: 'row',
  },
  scheduleTimeInput: {
    width: '35%',
    marginRight: Spacing.largest,
  },
  classTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.base,
  },
  classTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Spacing.base,
  },
  onImageContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.base,
    justifyContent: 'space-between',
    marginTop: 60,
    alignItems: 'center',
  },
  liveIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.livePink,
    marginRight: Spacing.smallest,
  },
  liveNowText: {
    ...Typography.p1,
    color: Colors.livePink,
  },

  registeredUserView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.small,
  },
  registerButton: {
    marginTop: Spacing.small,
    paddingVertical: Spacing.smaller,
    backgroundColor: Colors.andromeda,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyLinkButton: {
    marginTop: Spacing.base,
    paddingVertical: Spacing.smaller,
    backgroundColor: Colors.lightGrey,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerNowText: {
    lineHeight: 19,
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    fontFamily: fontFamily.book,
  },
  copyLinkText: {
    lineHeight: 19,
    fontSize: 15,
    fontWeight: '500',
    color: '#334E68',
    textAlign: 'center',
    fontFamily: fontFamily.book,
  },
  classDescriptionContainer: {
    marginTop: Spacing.base,
  },
  sectionContainer: {
    marginTop: Spacing.base,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.base,
    backgroundColor: Colors.white,
  },
  instructorViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.small,
  },
  instructorNameContainer: {
    marginLeft: Spacing.small,
  },
  containerFlexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsContainer: {
    marginTop: Spacing.small,
  },
  padding: {
    paddingRight: Spacing.smaller,
  },
  replyCommentContainer: {
    marginTop: Spacing.small,
    flexDirection: 'row',
    width: '85%',
  },
  invitedFriendsContainer: {
    marginTop: Spacing.smallest,
  },
  invitedFriendName: {
    ...Typography.p1,
    color: Colors.aquarius,
    marginLeft: Spacing.small,
  },
});

export default styles;
