import {StyleSheet} from 'react-native';
import fontFamily from '../../assets/fonts/fontFamily';

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  congoContainer: {
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossButton: { position: 'absolute', left: 20, top: 64 },
  congoText: {
    paddingTop: 32,
    fontSize: 23,
    fontWeight: 'bold',
    lineHeight: 29,
    color: '#102A43',
    letterSpacing: -0.3,
    fontFamily: fontFamily.book,
  },
  simpleText: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    color: '#334E68',
    fontFamily: fontFamily.book,
  },
  shareFriendText: {
    fontSize: 15,
    letterSpacing: -0.3,
    lineHeight: 15,
    color: '#334E68',
    fontWeight: 'bold',
    fontFamily: fontFamily.book,
  },
  optionalView: {
    height: 76,
    backgroundColor: '#FAFAFC',
    borderColor: '#a1aeb7',
    borderRadius: 10,
    marginTop: 16,
  },
  postButton: {
    marginTop: 12,
    height: 43,
    width: 93,
    backgroundColor: '#F86A6A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: -0.3,
    color: '#fff',
    fontFamily: fontFamily.book,
  },
  inviteButton: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 32,
    height: 48,
    backgroundColor: '#F86A6A',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    color: '#fff',
    fontFamily: fontFamily.book,
  },
  viewDivider: { height: 15, backgroundColor: '#f9f9f9', marginTop: 10 },
})

export default styles;
