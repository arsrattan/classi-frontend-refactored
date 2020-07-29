import { useState, useEffect } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
  useQuery,
} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import queries from './queries';
import { MockData } from '_mocks';

const abstractQuery = ({ queryParams }, gqlQuery, dataFunction, mockData) => {
  if (['dev', 'development'].includes(process.env.NODE_ENV)) {
    return { data: { mockData }, error: undefined, loading: false };
  }

  const [returnedData, setReturnedData] = useState({});
  const [queryLoading, setQueryLoading] = useState(true);
  const [errorReturned, setErrorReturned] = useState(undefined);

  const { data, error, loading } = useQuery(gqlQuery, {
    variables: { queryParams },
  });

  useEffect(() => {
    if (!error && !loading) {
      setReturnedData(data.dataFunction);
      setQueryLoading(false);
    } else {
      setErrorReturned(error);
      setQueryLoading(loading);
    }
  }, [data, error, loading]);

  return { data: returnedData, error: errorReturned, loading: queryLoading };
};

class GraphQLClient {
  static getApolloClient() {
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

    return client;
  }

  static queryAllClasses() {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return {
        data: MockData.upcomingClasses,
        error: undefined,
        loading: false,
      };
    }
    const { data, error, loading } = useQuery(queries.AllClasses);
    return { data, error, loading };
  }

  static queryClassById(classId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return {
        data: MockData.classesOverview,
        error: undefined,
        loading: false,
      };
    }

    const [returnedData, setReturnedData] = useState({});
    const [queryLoading, setQueryLoading] = useState(true);
    const [errorReturned, setErrorReturned] = useState(undefined);

    const { data, error, loading } = useQuery(queries.SpecificClass, {
      variables: { classId: classId },
    });

    useEffect(() => {
      if (!error && !loading) {
        setReturnedData(data.getClassById);
        setQueryLoading(false);
      } else {
        setErrorReturned(error);
        setQueryLoading(loading);
      }
    }, [data, error, loading]);

    return { data: returnedData, error: errorReturned, loading: queryLoading };
  }

  static queryUserById(userId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return { data: MockData.user, error: undefined, loading: false };
    }

    const [returnedData, setReturnedData] = useState({});
    const [queryLoading, setQueryLoading] = useState(true);
    const [errorReturned, setErrorReturned] = useState(undefined);

    const { data, error, loading } = useQuery(queries.SpecificUser, {
      variables: { userId: userId },
    });

    useEffect(() => {
      if (!error && !loading) {
        setReturnedData(data.getUserById);
        setQueryLoading(false);
      } else {
        setErrorReturned(error);
        setQueryLoading(loading);
      }
    }, [data, error, loading]);

    return { data: returnedData, error: errorReturned, loading: queryLoading };
  }

  static queryFollowersById(userId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return { data: MockData.followers, error: undefined, loading: false };
    }

    const [returnedData, setReturnedData] = useState({});
    const [queryLoading, setQueryLoading] = useState(true);
    const [errorReturned, setErrorReturned] = useState(undefined);

    const { data, error, loading } = useQuery(queries.UserFollowers, {
      variables: { userId: userId },
    });

    useEffect(() => {
      if (!error && !loading) {
        setReturnedData(data.getUserFollowers);
        setQueryLoading(false);
      } else {
        setErrorReturned(error);
        setQueryLoading(loading);
      }
    }, [data, error, loading]);

    return { data: returnedData, error: errorReturned, loading: queryLoading };
  }

  static queryPostsById(userId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return { data: MockData.postData, error: undefined, loading: false };
    }

    const [returnedData, setReturnedData] = useState({});
    const [queryLoading, setQueryLoading] = useState(true);
    const [errorReturned, setErrorReturned] = useState(undefined);

    const { data, error, loading } = useQuery(queries.UserPosts, {
      variables: { userId: userId },
    });

    useEffect(() => {
      if (!error && !loading) {
        setReturnedData(data.getAllPostsForUser);
        setQueryLoading(false);
      } else {
        setErrorReturned(error);
        setQueryLoading(loading);
      }
    }, [data, error, loading]);

    return { data: returnedData, error: errorReturned, loading: queryLoading };
  }
}

export default GraphQLClient;
