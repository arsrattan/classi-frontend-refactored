import React, { Component, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { fontFamily, crossImg } from '_assets';
import { FilterChip } from '_molecules';

const FilterModal = (props) => {
  const [press, setPress] = useState(false)
  const [selected, setSelected] = useState(2)
  const difficulty = ['Beginner', 'Intermidiate', 'Advance']
  const duration = ['<15 Min', '15-30 Min', '>30 Min']
  const day = [
    'Today',
    'Tommorrow',
    'This Week',
    'This Month',
    'or cutome date',
  ]
  var radio_props = [
    { label: 'Newest: Lowest First', value: 0 },
    { label: 'Newest: Highest First', value: 1 },
    { label: 'User Registered: Low First', value: 2 },
    { label: 'User Registered: High First', value: 3 },
  ]
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        // justifyContent: 'flex-end',
        paddingTop: 100,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 16,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            paddingTop: 32,
            fontWeight: '500',
            fontSize: 27,
            lineHeight: 34,
            letterSpacing: -0.3,
            textAlign: 'center',
            fontFamily: fontFamily.book,
            color: '#334E68',
          }}
        >
          Filter Classes
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.setVisible(false)
          }}
          style={{ position: 'absolute', left: 16, top: 32 }}
        >
          <Image source={crossImg} />
        </TouchableOpacity>
        <Text
          style={{
            paddingTop: 24,
            fontWeight: '500',
            fontSize: 17,
            lineHeight: 22,
            fontFamily: fontFamily.book,
            color: '#102A43',
            letterSpacing: -0.3,
          }}
        >
          Day
        </Text>
        <FilterChip data={day} press={press} setPress={setPress} />
        <Text
          style={{
            paddingTop: 24,
            fontWeight: '500',
            fontSize: 17,
            lineHeight: 22,
            fontFamily: fontFamily.book,
            color: '#102A43',
            letterSpacing: -0.3,
          }}
        >
          Length
        </Text>
        <FilterChip data={duration} press={press} setPress={setPress} />
        <Text
          style={{
            paddingTop: 24,
            fontWeight: '500',
            fontSize: 17,
            lineHeight: 22,
            fontFamily: fontFamily.book,
            color: '#102A43',
            letterSpacing: -0.3,
          }}
        >
          Difficulty
        </Text>
        <FilterChip data={difficulty} press={press} setPress={setPress} />
        <Text
          style={{
            paddingTop: 24,
            fontWeight: '500',
            fontSize: 17,
            lineHeight: 22,
            fontFamily: fontFamily.book,
            color: '#102A43',
            letterSpacing: -0.3,
          }}
        >
          Sort By
        </Text>
        <RadioForm style={{ paddingTop: 12 }} animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          {radio_props.map((item, i) => (
            <RadioButton key={i}>
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={item}
                index={i}
                isSelected={selected === i}
                onPress={(value) => {
                  setSelected(value)
                }}
                borderWidth={1}
                buttonInnerColor={'#fff'}
                buttonOuterColor={'rgba(161, 174, 183, 0.1)'}
                buttonSize={12}
                buttonOuterSize={24}
                buttonWrapStyle={{
                  marginLeft: 10,
                  backgroundColor: selected == i ? '#F86A6A' : '#FAFAFC',
                  borderRadius: 40,
                }}
              />
              <RadioButtonLabel
                obj={item}
                index={i}
                labelHorizontal={true}
                onPress={(value) => {
                  setSelected(value)
                }}
                labelStyle={{
                  lineHeight: 19,
                  fontSize: 15,
                  color: '#334E68',
                  fontFamily: fontFamily.book,
                }}
              />
            </RadioButton>
          ))}
        </RadioForm>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingTop: 34,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 19,
                fontWeight: 'bold',
                color: '#334E68',
                letterSpacing: -0.3,
              }}
            >
              Clear All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.setVisible(false)
            }}
            style={{
              width: 141,
              height: 43,
              backgroundColor: '#F86A6A',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 15,
                lineHeight: 19,
                fontWeight: '500',
                color: '#fff',
                letterSpacing: -0.3,
              }}
            >
              Apply Filter
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default FilterModal
