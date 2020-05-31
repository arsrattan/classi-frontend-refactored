import {StyleSheet} from 'react-native'
import { fontFamily } from '_assets';

const styles = StyleSheet.create({
  findClassText: {
    fontWeight: '500',
    fontSize: 27,
    lineHeight: 37,
    letterSpacing: -0.3,
    color: '#102A43',
    fontFamily: fontFamily.book,
  },
  searchContainer: {
    width: 270,
    height: 47,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 19,
    flexDirection: 'row',
  },
  filterBtn: {
    width: 48,
    height: 47,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    margin: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },
  filterChipText: {
    fontFamily: fontFamily.book,
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  popularClassText: {
    paddingTop: 32,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: '#102A43',
    letterSpacing: -0.3,
    fontFamily: fontFamily.book,
  },
  allClassText: {
    paddingTop: 10,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: '#102A43',
    letterSpacing: -0.3,
    fontFamily: fontFamily.book,
  },
})

export default styles