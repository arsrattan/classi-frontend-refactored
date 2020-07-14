import {fontFamily} from '_assets';
import * as Colors from './colors';

export const p1 = {
  fontFamily: fontFamily.book,
  fontSize: 15,
  lineHeight: 19,
};

export const p2 = {
  fontFamily: fontFamily.book,
  fontSize: 13,
  lineHeight: 16,
};

export const p3 = {
  fontFamily: fontFamily.book,
  fontSize: 11,
  lineHeight: 14,
};

export const h1 = {
  fontFamily: fontFamily.medium,
  fontSize: 27,
  lineHeight: 34,
  letterSpacing: -0.3,
};

export const h2 = {
  fontFamily: fontFamily.medium,
  fontSize: 23,
  lineHeight: 29,
  letterSpacing: -0.3,
};

export const h3 = {
  fontFamily: fontFamily.medium,
  fontSize: 17,
  lineHeight: 22,
  letterSpacing: -0.3,
};

export const p1d1 = {
  ...p1,
  color: Colors.aquarius,
};

export const p1d2 = {
  ...p1,
  color: Colors.aries,
};

export const p1white = {
  ...p1,
  color: Colors.white,
};

export const p2d2 = {
  ...p2,
  color: Colors.aries,
};

export const p3d3 = {
  ...p3,
  color: Colors.leo,
};

export const p2danger = {
  ...p2,
  color: Colors.danger,
};

export const h3d1 = {
  ...h3,
  color: Colors.aquarius,
};

export const h1d1 = {
  ...h1,
  color: Colors.aquarius,
};

export const h2d1 = {
  ...h2,
  color: Colors.aquarius,
};

export const bold = {
  fontFamily: fontFamily.bold,
};

export const medium = {
  fontFamily: fontFamily.medium,
};

export const unbold = {
  fontFamily: fontFamily.book,
};
