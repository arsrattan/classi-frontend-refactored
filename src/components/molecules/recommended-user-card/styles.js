import {StyleSheet} from 'react-native';
import {fontFamily} from '_assets';
import {Spacing, Colors, Typography} from '_styles';

const styles = StyleSheet.create({
  followCardContainer: {
    flex: 1,
    height: 210,
  },
  followButtonContainer: {
    marginTop: Spacing.base,
  },
  feedCard: {
    width: 163,
    height: 180,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginRight: Spacing.small,
    alignItems: 'center',
    paddingTop: 44,
  },
  feedCardImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: -25,
  },
  instructorName: {
    ...Typography.h3,
    color: Colors.aquarius,
    textAlign: 'center',
    marginBottom: Spacing.tiny,
  },
  tagAndText: {
    ...Typography.p2,
    color: Colors.aries,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: Spacing.tiny,
  },
  boldCount: {
    ...Typography.p2,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
    color: Colors.aries,
  },
});

export default styles;
