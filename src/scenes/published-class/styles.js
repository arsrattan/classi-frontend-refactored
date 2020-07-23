import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '_styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30%',
    backgroundColor: Colors.white,
  },
  crossButton: {
    position: 'absolute',
    top: 60,
    left: Spacing.base,
  },
  subtextContainer: {
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.largest,
  },
  postContainer: {
    backgroundColor: Colors.white,
    marginTop: Spacing.base,
    padding: Spacing.base,
  },
  optionalView: {
    height: 90,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    marginVertical: Spacing.base,
  },
  placeholderText: {
    paddingTop: Spacing.small,
    paddingHorizontal: Spacing.base,
  },
  buttonStyle: {
    flexDirection: 'row',
  },
  centerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
