import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Colors, Spacing} from '_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.base,
  },
  profileImgContainer: {
    marginTop: Spacing.base,
    alignItems: 'center',
  },
  inputFieldContainer: {
    paddingHorizontal: Spacing.smallest,
  },
});

export default styles;
