import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import Mixpanel from 'react-native-mixpanel';
import Navigator from '_navigations';

Mixpanel.sharedInstanceWithToken('eb7505419018b61e29d3eb735c23a43f').then(
  () => {
    Mixpanel.track('test');
  },
);

const httpLink = new HttpLink({
  uri: 'https://un0aj2v41h.execute-api.us-east-1.amazonaws.com/dev/graphql',
});

const authMiddleware = new ApolloLink(async (operation, forward) => {
  const token = await AsyncStorage.getItem('AUTH_TOKEN');
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;

/*
const httpLink = new HttpLink({
  uri: 'https://un0aj2v41h.execute-api.us-east-1.amazonaws.com/dev/graphql',
});
const authLink = setContext(async (req, { headers }) => {
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
*/
