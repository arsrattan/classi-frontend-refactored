import { StyleSheet } from 'react-native';
import { Typography, Spacing, Colors } from '_styles';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  forgotPassword: {
    ...Typography.p1,
    color: Colors.andromeda,
    textAlign: 'center',
    marginTop: Spacing.base,
  },
});

export default styles;
