import React, {useState} from 'react';
import {
  View,
  Text,
  Button as ReactButton,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Tile, InputField, Button} from '_atoms';
import styles from './styles';
import {Colors, Typography, Spacing} from '_styles';

const Tab = createMaterialTopTabNavigator();

const LoginNavigator = ({navigation}) => {
  const LoginTab = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.formContainer}>
          <Text style={[Typography.h1d1, {marginTop: Spacing.large}]}>
            Login to continue
          </Text>
          <InputField
            label="Username or Email"
            placeholderText="user@email.com"
          />
          <InputField label="Password" placeholderText="********" />
          <Button
            text="Login"
            type="PrimaryRound"
            style={{marginTop: Spacing.largest}}
            navigation={navigation}
            screen="Home"
          />
          <TouchableOpacity style={styles.backArrow} onPress={() => {}}>
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    const newStatus = !show;
    setShow(newStatus);
  };

  const dismissDatePicker = () => {
    setShow(false);
    Keyboard.dismiss();
  };

  const SignupTab = () => {
    return (
      <TouchableWithoutFeedback onPress={dismissDatePicker} accessible={false}>
        <View style={styles.formContainer}>
          <Text style={[Typography.h1d1, {marginTop: Spacing.large}]}>
            Join Classi
          </Text>
          <InputField label="Email" placeholderText="user@email.com" />
          <InputField label="Name" placeholderText="John Doe" />
          <InputField label="Username" placeholderText="classi123" />
          <InputField label="Password" placeholderText="********" />
          <InputField
            label="Date of birth"
            placeholderText="Must be at least 16"
            onPress={showDatePicker}
            value={date}
          />
          <Button
            text="Join now"
            type="PrimaryRound"
            style={{marginTop: Spacing.largest}}
            navigation={navigation}
            screen="Home"
          />
          {show && <DateTimePicker value={date} onChange={onChange} />}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: Colors.andromeda},
        labelStyle: {fontWeight: 'bold', textTransform: 'capitalize'},
      }}>
      <Tab.Screen name="Login" component={LoginTab} />
      <Tab.Screen name="Sign up" component={SignupTab} />
    </Tab.Navigator>
  );
};

export default LoginNavigator;
