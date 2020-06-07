import {StyleSheet} from 'react-native';
import {Colors, Icons, Spacing, Typography} from '_styles';

const styles = StyleSheet.create({
  icon: {
    ...Icons.normal,
    marginRight: Spacing.tiny,
  },
  tileContainer: {
    paddingHorizontal: Spacing.base,
  },
  imageStyle: {
    height: 216,
    width: '100%',
    marginTop: 16,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '40%',
    marginLeft: Spacing.base,
  },
  classNameText: {
    ...Typography.h3,
    color: Colors.white,
  },
  additionalClassDetailsText: {
    ...Typography.p1,
    color: Colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: Spacing.smallest,
    alignItems: 'center',
    marginBottom: Spacing.small,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Spacing.small,
  },
});

export default styles;
