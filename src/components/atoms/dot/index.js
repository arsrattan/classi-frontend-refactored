import React from 'react';
import {View} from 'react-native';
import {Spacing} from '_styles';

const Dot = ({color, size}) => {
  let dotSize;
  if (size === 'base') {
    dotSize = {height: 2, width: 2, borderRadius: 1};
  } else if (size === 'large') {
    dotSize = {height: 6, width: 6, borderRadius: 3};
  }

  return (
    <View
      style={{
        ...dotSize,
        backgroundColor: color,
        marginHorizontal: Spacing.smaller,
      }}
    />
  );
};

export default Dot;
