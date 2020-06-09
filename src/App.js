import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from '_navigations';
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

const authLink = setContext((_, {headers}) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZXJlayIsImVtYWlsIjoiZGVyZWtAZ21haWwuY29tIiwiaWF0IjoxNTkxNjcyNjA2LCJleHAiOjE1OTE2NzYyMDZ9.9VBSy89hEKQ4nF-gk63zIfeImnmbKR6EdkX_q1F0MVg';
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});
const uri =
  'https://un0aj2v41h.execute-api.us-east-1.amazonaws.com/dev/graphql';
const httpLink = createHttpLink({uri, fetch});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
