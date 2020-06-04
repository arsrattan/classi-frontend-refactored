import {StyleSheet, Platform} from 'react-native';
import {fontFamily} from '_assets';

const styles = StyleSheet.create({
  keyboardShift: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F5F6',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  allCommentsHeader: {
    paddingTop: 34,
    backgroundColor: '#F4F5F6',
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(161, 174, 183, 0.1);',
  },
  commentsHeading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#334E68',
    lineHeight: 19,
    fontSize: 15,
    letterSpacing: -0.3,
    fontFamily: fontFamily.book,
  },
  replyTile: {
    flexDirection: 'row',
    paddingLeft: 76,
    paddingTop: 8,
    alignItems: 'center',
  },
  replyText: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: fontFamily.book,
    color: '#334E68',
  },
  timeAgo: {
    paddingLeft: 24,
    fontSize: 13,
    lineHeight: 16,
    fontFamily: fontFamily.book,
    color: 'rgba(51, 78, 104, 0.8)',
  },
  viewDivider: {
    height: 15,
    backgroundColor: '#F4F5F6',
    marginBottom: 20,
  },
  commentContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginTop: '4%',
    paddingTop: '4%',
    paddingBottom: '10%',
  },
  writeCommentView: {
    height: 47,
    width: 280,
    backgroundColor: '#FAFAFC',
    borderWidth: 1,
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    height: '78%',
  },
});

export default styles;
