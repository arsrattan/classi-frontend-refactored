import {StyleSheet} from 'react-native';
import {Typography, Colors, Spacing} from '_styles';

const styles = StyleSheet.create({
  p1dark1: {
    ...Typography.p1,
    ...Colors.dark1,
  },
  p2dark2: {
    ...Typography.p2,
    ...Colors.dark2,
  },
  p2light1: {
    ...Typography.p2,
    ...Colors.light1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.small,
  },
  cardContainer: {
    backgroundColor: Colors.white,
    width: 210,
    height: 250,
    borderRadius: 10,
    marginLeft: Spacing.small,
  },
  instructorTextContainer: {
    paddingLeft: 10,
  },
  imageContainer: {
    height: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  dateTag: {
    width: 35,
    height: 48,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -5,
    left: 12,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    ...Typography.h3,
    color: Colors.aries,
  },
  month: {
    ...Typography.p2,
    color: Colors.andromeda,
  },
  classDetailContainer: {
    paddingLeft: Spacing.small,
  },
  classNameText: {
    paddingVertical: Spacing.smaller,
    ...Typography.h3,
    color: Colors.aquarius,
  },
  dateAndTime: {
    ...Typography.p2,
    color: Colors.aries,
    paddingBottom: Spacing.tiny,
  },
});

export default styles;
