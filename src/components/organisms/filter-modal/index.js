import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {crossImg} from '_assets';
import {Divider} from '_atoms';
import {FilterChip} from '_molecules';
import styles from './styles';

const FilterModal = ({setVisible}) => {
  const [press, setPress] = useState(false);
  const [selected, setSelected] = useState(2);
  const difficulty = ['Beginner', 'Intermidiate', 'Advance'];
  const duration = ['<15 Min', '15-30 Min', '>30 Min'];
  const day = [
    'Today',
    'Tommorrow',
    'This Week',
    'This Month',
    'or cutome date',
  ];
  var radio_props = [
    {label: 'Newest: Lowest First', value: 0},
    {label: 'Newest: Highest First', value: 1},
    {label: 'User Registered: Low First', value: 2},
    {label: 'User Registered: High First', value: 3},
  ];
  return (
    <View style={styles.modalScreenContainer}>
      <ScrollView style={styles.modalContainer}>
        <Text style={styles.modalHeaderText}>Filter Classes</Text>
        <TouchableOpacity
          onPress={() => {
            setVisible(false);
          }}
          style={styles.closeIcon}>
          <Image source={crossImg} style={styles.iconNormal} />
        </TouchableOpacity>
        <Text style={styles.sectionHeaderText}>Date</Text>
        <FilterChip data={day} press={press} setPress={setPress} />
        <Divider />
        <Text style={styles.sectionHeaderText}>Length</Text>
        <FilterChip data={duration} press={press} setPress={setPress} />
        <Divider />
        <Text style={styles.sectionHeaderText}>Difficulty</Text>
        <FilterChip data={difficulty} press={press} setPress={setPress} />
        <Divider />
        <Text style={styles.sectionHeaderText}>Sort By</Text>
        <RadioForm animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          {radio_props.map((item, i) => (
            <RadioButton key={i}>
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={item}
                index={i}
                isSelected={selected === i}
                onPress={(value) => {
                  setSelected(value);
                }}
                borderWidth={1}
                buttonInnerColor={'#fff'}
                buttonOuterColor={'rgba(161, 174, 183, 0.1)'}
                buttonSize={12}
                buttonOuterSize={24}
                buttonWrapStyle={
                  selected === i
                    ? styles.radioButtonSelected
                    : styles.radioButtonUnselected
                }
              />
              <RadioButtonLabel
                obj={item}
                index={i}
                labelHorizontal={true}
                onPress={(value) => {
                  setSelected(value);
                }}
                labelStyle={styles.p1d2}
              />
            </RadioButton>
          ))}
        </RadioForm>
        <View style={styles.filterButtonContainer}>
          <TouchableOpacity>
            <Text style={styles.p1d1}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default FilterModal;
