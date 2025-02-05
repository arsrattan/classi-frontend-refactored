import React, { useState, useEffect, createContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-boost';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Tile, InputField, Button } from '_atoms';
import styles from './styles';
import { Colors, Typography, Spacing } from '_styles';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const SignupTab = ({ navigation }) => {
  function validate(values) {
    let errors = {};
    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.username = 'Please enter a valid username!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        values.password,
      )
    ) {
      errors.password =
        'Password must be at least 8 letters, contain a symbol, upper and lower case letter, and a number!';
    }
    if (!values.firstName) {
      errors.firstName = 'First name is required!';
    } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
      errors.firstName = 'Please enter a valid first name!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!';
    } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
      errors.lastName = 'Please enter a valid last name!';
    }
    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (!/^\w+$/.test(values.username)) {
      errors.username =
        'Username must contain only letters, numbers and underscores!';
    }
    return errors;
  }

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (newValue, name) => {
    setValues((values) => ({
      ...values,
      [name]: newValue,
      dateOfBirth: date.toISOString(),
    }));
  };

  const showDatePicker = () => {
    const newStatus = !show;
    setShow(newStatus);
  };

  const dismissDatePicker = () => {
    setShow(false);
    Keyboard.dismiss();
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log('Registering user!!!');
      console.log(
        `Sending with values: ${JSON.stringify(values, undefined, 2)}`,
      );
      registerUser();
      setIsSubmitting(false);
    }
  }, [errors, error, values, isSubmitting, registerUser]);

  const REGISTER_USER = gql`
    mutation RegisterUser($data: CreateUserInput!) {
      registerUser(data: $data)
    }
  `;
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER, {
    variables: { data: values },
  });

  const handleSubmit = () => {
    const errs = validate(values);
    setErrors(errs);
    setIsSubmitting(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.formContainer}
        enabled
        behavior="position">
        <Text style={[Typography.h1d1, { marginTop: Spacing.large }]}>
          Join Classi
        </Text>
        <Text style={[Typography.p2danger]}>{errors.register}</Text>
        <InputField
          label="Email"
          placeholderText="user@email.com"
          value={values.email || ''}
          onChange={handleChange}
          name={'email'}
        />
        <Text style={[Typography.p2danger]}>{errors.email}</Text>
        <InputField
          label="First Name"
          placeholderText="John"
          value={values.firstName || ''}
          onChange={handleChange}
          name={'firstName'}
        />
        <Text style={[Typography.p2danger]}>{errors.firstName}</Text>
        <InputField
          label="Last Name"
          placeholderText="Doe"
          value={values.lastName || ''}
          onChange={handleChange}
          name={'lastName'}
        />
        <Text style={[Typography.p2danger]}>{errors.lastName}</Text>
        <InputField
          label="Username"
          placeholderText="classi123"
          value={values.username || ''}
          onChange={handleChange}
          name={'username'}
        />
        <Text style={[Typography.p2danger]}>{errors.username}</Text>
        <InputField
          label="Password"
          placeholderText="********"
          value={values.password || ''}
          onChange={handleChange}
          name={'password'}
        />
        <Text style={[Typography.p2danger]}>{errors.password}</Text>
        <InputField
          label="Date of birth"
          placeholderText="Must be at least 16"
          onPress={showDatePicker}
          onChange={handleChange}
          value={date}
        />
        <Button
          text="Join now"
          type="PrimaryRound"
          style={{ marginTop: Spacing.largest }}
          navigation={navigation}
          screen="Home"
          onPress={handleSubmit}
        />
        {show && <DateTimePicker value={date} onChange={onChange} />}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const LoginTab = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (newValue, name) => {
    setValues((values) => ({ ...values, [name]: newValue }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      loginUser({
        variables: { username: values.username, password: values.password },
      })
        .then(({ data }) => {
          if (data.login != null) {
            AsyncStorage.setItem('AUTH_TOKEN', data.login.accessToken);
            AsyncStorage.setItem('USER_ID', data.login.username);
            navigation.navigate('Home');
          }
        })
        .catch((e) => {
          errors.login = e.message.split(': ')[1];
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting, errors, data, error, loading]);

  const LOGIN_USER = gql`
    mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        accessToken
        username
      }
    }
  `;
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.formContainer}>
        <Text style={[Typography.h1d1, { marginTop: Spacing.large }]}>
          Login to continue
        </Text>
        <Text style={[Typography.p2danger]}>{errors.login}</Text>
        <InputField
          label="Username"
          placeholderText="your_username"
          onChange={handleChange}
          value={values.username || ''}
          name={'username'}
        />
        <InputField
          label="Password"
          placeholderText="********"
          onChange={handleChange}
          value={values.password || ''}
          name={'password'}
        />
        <Button
          text="Login"
          type="PrimaryRound"
          style={{ marginTop: Spacing.largest }}
          navigation={navigation}
          screen="Home"
          onPress={handleSubmit}
          isSubmitting={isSubmitting}
        />
        <TouchableOpacity style={styles.backArrow}>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const LoginNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: Colors.andromeda },
        labelStyle: { fontWeight: 'bold', textTransform: 'capitalize' },
      }}>
      <Tab.Screen name="Login" component={LoginTab} />
      <Tab.Screen name="Sign up" component={SignupTab} />
    </Tab.Navigator>
  );
};

export default LoginNavigator;
