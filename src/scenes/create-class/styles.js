import {StyleSheet} from 'react-native';
import {Spacing, Typography, Colors, Icons} from '_styles';

const styles = StyleSheet.create({
  createClassContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
  },
  createHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: Spacing.base,
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.base,
  },
  privacyButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Spacing.smaller,
  },
  padding: {
    paddingRight: Spacing.smaller,
  },
  coverContainer: {
    marginTop: 12,
    width: '100%',
    backgroundColor: '#FAFAFC',
    borderColor: 'rgba(161, 174, 183, 0.1)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    marginTop: 21,
    height: 43,
    backgroundColor: '#F86A6A',
    marginHorizontal: 16,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeButton: {
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 154,
    height: 35,
    borderRadius: 18,
    marginRight: Spacing.smaller,
  },
});

export default styles;
