import { StyleSheet } from 'react-native';
import { Typography, Spacing, Colors } from '_styles';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: Spacing.largest,
    backgroundColor: Colors.white,
  },
  skipContainer: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  centeredContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default styles;
