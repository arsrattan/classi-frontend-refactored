import { StyleSheet } from 'react-native';
import { Colors, Icons, Spacing, Typography } from '_styles';

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
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginLeft: Spacing.base,
  },
  classNameText: {
    ...Typography.h3,
    color: Colors.black,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: Spacing.small,
    paddingTop: Spacing.small,
  },
  instructorTextContainer: {
    paddingLeft: 10,
  },
  additionalClassDetailsText: {
    ...Typography.p1,
    color: Colors.black,
  },
  touchableOpacity: {
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: 10,
    marginBottom: Spacing.small,
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
