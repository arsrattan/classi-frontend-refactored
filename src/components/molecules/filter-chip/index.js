import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { fontFamily } from '_assets';

const FilterChip = ({ data, press, setPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
      }}
    >
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
             setPress(!press)
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 36,
              margin: 8,
              paddingHorizontal: 16,
              paddingVertical: 10,
              backgroundColor: press && !index ? '#F86A6A' : '#F5F5F5',
              borderRadius: 18,
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.book,
                fontSize: 13,
                lineHeight: 16,
                letterSpacing: 0.5,
                textTransform: 'capitalize',
                color: press && !index ? '#fff' : '#102A43',
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )
      })}
      
    </View>
  )
}
export default FilterChip
