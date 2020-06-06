import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Typography, Colors, Spacing, Icons} from '_styles';

const styles = StyleSheet.create({
  iconNormal: {
    ...Icons.normal,
  },
  iconLarge: {
    ...Icons.large,
  },
  h3d1: {
    ...Typography.h3,
    color: Colors.aquarius,
  },
  p1d1: {
    ...Typography.p1,
    color: Colors.aquarius,
  },
  p1d2: {
    ...Typography.p1,
    color: Colors.aries,
  },
  p2d2: {
    ...Typography.p2,
    color: Colors.aries,
  },
  feedPostContainer: {
    padding: Spacing.base,
    backgroundColor: Colors.white,
    marginBottom: Spacing.base,
  },
  feedPostHeaderContainer: {
    flexDirection: 'row',
  },
  feedPostHeaderTextContainer: {
    flex: 1,
    paddingLeft: Spacing.small,
    paddingTop: Spacing.hairline,
  },
  postDetailsContainer: {
    paddingTop: Spacing.base,
  },
  classDetailsContainer: {
    paddingTop: Spacing.small,
  },
  dividingBorder: {
    marginTop: Spacing.small,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  likeContainer: {
    paddingTop: Spacing.small,
    flexDirection: 'row',
  },
  interactionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Spacing.smaller,
  },
  likeCommentContainer: {
    flexDirection: 'row',
  },
  likeButtonContainer: {
    marginRight: Spacing.base,
  },
  allCommentContainer: {
    paddingTop: Spacing.small,
  },
  commentTileContainer: {
    paddingTop: Spacing.smaller,
  },
  viewDivider: {height: 15, backgroundColor: '#f9f9f9', marginTop: 20},
});

export default styles;
