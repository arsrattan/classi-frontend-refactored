import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import Mixpanel from 'react-native-mixpanel';
import Navigator from '_navigations';
import { GraphQLClient } from '_services';

Mixpanel.sharedInstanceWithToken('eb7505419018b61e29d3eb735c23a43f').then(
  () => {
    Mixpanel.track('test');
  },
);

const client = GraphQLClient.getApolloClient();

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
