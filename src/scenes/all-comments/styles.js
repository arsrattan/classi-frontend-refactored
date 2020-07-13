import {StyleSheet, Platform} from 'react-native';
import {Spacing, Typography, Colors, Icons} from '_styles';

const styles = StyleSheet.create({
  iconNormal: {
    ...Icons.normal,
  },
  iconLarger: {
    ...Icons.larger,
  },
  keyboardShift: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  allCommentsHeader: {
    paddingTop: Spacing.largest,
    backgroundColor: Colors.grey,
    paddingBottom: Spacing.base,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(161, 174, 183, 0.1);',
  },
  backButtonStyle: {
    position: 'absolute',
    top: Spacing.largest,
    left: Spacing.base,
  },
  commentsHeading: {
    alignSelf: 'center',
    color: Colors.aries,
    ...Typography.h3,
  },
  commentContainerView: {
    backgroundColor: Colors.white,
    marginTop: Spacing.base,
    paddingTop: Spacing.base,
    width: '100%',
    paddingBottom: '10%',
    alignItems: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
  },
  postContainer: {
    backgroundColor: Colors.white,
    height: '78%',
  },
});

export default styles;
