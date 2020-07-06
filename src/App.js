import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from '_navigations';
import {ApolloProvider} from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset';
import {setContext} from 'apollo-link-context';
import Mixpanel from 'react-native-mixpanel';

Mixpanel.sharedInstanceWithToken('eb7505419018b61e29d3eb735c23a43f').then(
  () => {
    Mixpanel.track('test');
  },
);

let token;
const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  token = await AsyncStorage.getItem('AUTH_TOKEN');
  return token;
};

const httpLink = new HttpLink({
  uri: 'https://un0aj2v41h.execute-api.us-east-1.amazonaws.com/dev/graphql',
});
const authLink = setContext(async (req, {headers}) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});
const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
