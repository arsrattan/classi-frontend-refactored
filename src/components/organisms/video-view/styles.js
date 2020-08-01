import { StyleSheet } from 'react-native';
import { Colors, Icons, Spacing, Typography } from '_styles';

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    // This is an existing React Native issue:
    // When you create a native android component
    // that use GLSurfaceView (We use this internally), the entire screen will
    // black out
    overflow: 'hidden',
  },
  video: {
    width: '45%',
    margin: '1%',
    aspectRatio: 16 / 9,
  },
});

export default styles;
