import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {logoImg, facebookImg, instagramImg, emailImg} from '_assets';
import {Icons, Spacing, Typography} from '_styles';
import styles from './styles';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {Button} from '_atoms';
import InstagramLogin from 'react-native-instagram-login'
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'

const LoginScreen = ({navigation}) => {
  const REGISTER_USER = gql`
    mutation RegisterUser($data: CreateUserInput!) {
      registerUser(data: $data)
    }
  `;

  const [fbInfo, setFbInfo] = useState({});
  const [igInfo, setIgInfo] = useState({});
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const [registerUser, {data, loading, error}] = useMutation(REGISTER_USER, {
    variables: {data: values},
  });

  useEffect(() => {
    console.log('brick2');
    registerUser()
      .then(({data}) => {
        if (data.registerUser == true) {
          navigation.navigate('Home');
        }
      })
      .catch((e) => {
        console.log(values);
      });
  }, [values]);

  const handleChange = (d) => {
    
    setValues(d);
  };

  setIgToken = (data) => {
    setIgInfo({ token: data.access_token })
    fetch('https://graph.instagram.com/me/?fields=id,username&access_token=' + data.access_token)
    .then((response) => response.json())
    .then(data => {
      fetch('https://www.instagram.com/' + data.username + '/?__a=1')
      .then((response) => response.json())
      .then((igdata) => {
        let userData = {};
        userData['firstName'] = igdata.graphql.user.full_name;
        userData['lastName'] = igdata.graphql.user.full_name;
        userData['userId'] = igdata.graphql.user.username;
        userData['s3url'] = igdata.graphql.user.profile_pic_url;
        userData['fbOrIgLogin'] = true;
        handleChange(userData);
      });
    });
  }

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name, first_name, last_name'
      },
    }

    const profileRequest = new GraphRequest('/me', { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, result) => {
        if (error) {
          console.log('Login Info has an error:', err)
        }
        else {
          setFbInfo(result)
          navigation.navigate('Home');
        }
      },
    )
    new GraphRequestManager().addRequest(profileRequest).start()
  }

  logoutWithFacebook = () => {
    LoginManager.logOut()
    setFbInfo({})
  }

  loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('login canceled')
        }
        else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString()
            this.getInfoFromToken(accessToken);
          })
        }
      },
      error => {
        console.log('login fail with error: ' + console.error());
      },
    )
  }

  useEffect(() => {}, [fbInfo, igInfo]);

  const isLogin = fbInfo.name
  const buttonText = isLogin ? 'Logout with facebook' : 'login with facebook'
  const onPressFacebook = isLogin ? this.logoutWithFacebook : this.loginWithFacebook
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.skipContainer}>
        <Text style={Typography.p1d2}>Skip login for now</Text>
      </TouchableOpacity>
      <View style={styles.centeredContainer}>
        <Image source={logoImg} style={Icons.largest} />
        <Text style={[Typography.h1d1, {paddingTop: Spacing.larger}]}>
          Welcome to Classi
        </Text>
        <Text
          style={[
            Typography.p1d2,
            {textAlign: 'center', paddingTop: Spacing.small},
          ]}>
          The first app designed to make home workouts social. Join today and
          experience the intersection of fitness and fun.
        </Text>
        <View>
          <Button
            text="Continue with Facebook"
            color="#3D5B91"
            icon={facebookImg}
            style={{marginTop: Spacing.large}}
            onPress={onPressFacebook}
          />
          <Button
            text="Continue with Instagram"
            color="#d62976"
            icon={instagramImg}
            style={{marginTop: Spacing.small}}
            onPress={() => this.instagramLogin.show()}
          />
          <View style={styles.buttonContainer}>
            <Text style={[Typography.h3d1, {paddingVertical: Spacing.larger}]}>
              or
            </Text>
          </View>
          <Button
            text="Continue with email"
            icon={emailImg}
            type="SecondaryRound"
            navigation={navigation}
            screen="EmailLogin"
          />
        </View>
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId='2680371988875656'
          appSecret='0b6f4f97faffa82633b6d02a31e4fba4'
          redirectUrl='https://www.classi.live/'
          scopes={['user_profile']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={(data) => console.log(data)}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
