import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from '_navigations';
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'https://un0aj2v41h.execute-api.us-east-1.amazonaws.com/dev/graphql',
  cache: new InMemoryCache(),
  request: (operation) => {
    const token = localStorage.getItem('AUTH_TOKEN')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
});
const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
