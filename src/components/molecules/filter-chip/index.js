import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Colors} from '_styles';

const FilterChip = ({data, press, setPress}) => {
  return (
    <View style={styles.tagContainer}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setPress(index);
            }}
            style={[
              styles.buttonStyle,
              {
                backgroundColor:
                  press == index ? Colors.andromeda : Colors.grey,
              },
            ]}>
            <Text style={[
                styles.filterChipText,
                {
                  color: press == index ? '#fff' : '#102A43',
                },
              ]}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default FilterChip;
