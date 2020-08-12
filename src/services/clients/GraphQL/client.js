import { useState, useEffect } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
  useQuery,
  useMutation,
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

  /****************
   User requests
   ****************/

  // Get userId
  static getCurrentUserId() {
    // use derekxiao77 for mock data
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return 'derekxiao77';
    }
    const [state, setState] = useState({});
    useEffect(() => {
      const asyncFetchToken = async () => {
        const res = await AsyncStorage.getItem('USER_ID');
        setState(res);
      };
      asyncFetchToken();
    }, [state]);
    return state;
  }

  // Get user data from userId
  static queryUserById(userId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return {
        data: MockData.users.filter(function (c) {
          return c.userId === userId;
        }),
        error: undefined,
        loading: false,
      };
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

  // Get all users
  static queryAllUsers() {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return {
        data: MockData.users,
        error: undefined,
        loading: false,
      };
    }
    const { data, error, loading } = useQuery(queries.AllUsers);
    return { data, error, loading };
  }

  // Get a user's followers
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

  /****************
   Class requests
   ****************/

  // Get all classes
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

  // Get class data by id
  static queryClassById(classId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return {
        data: MockData.classesOverview.filter(function (c) {
          return c.classId === classId;
        }),
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

  // Register for class
  static registerForClass(classId, userId, scheduledTime) {
    const [returnedData, setReturnedData] = useState(false);
    const [queryLoading, setQueryLoading] = useState(true);
    const [errorReturned, setErrorReturned] = useState(undefined);

    const [registerClass, { data, error, loading }] = useMutation(
      queries.RegisterForClass,
      {
        variables: {
          scheduledTime: scheduledTime,
          classId: classId,
          userId: userId,
        },
      },
    );

    useEffect(() => {
      if (!error && !loading) {
        setReturnedData(data.registerForClass);
        setQueryLoading(false);
      } else {
        setErrorReturned(error);
        setQueryLoading(loading);
      }
    }, [data, error, loading]);

    return {
      registerClass: registerClass,
      data: returnedData,
      error: errorReturned,
      loading: queryLoading,
    };
  }

  /****************
   Post requests
   ****************/

  // Get a user's posts
  static queryPostsById(userId) {
    if (['dev', 'development'].includes(process.env.NODE_ENV)) {
      return {
        data: MockData.postData.filter(function (c) {
          return c.userId === userId;
        }),
        error: undefined,
        loading: false,
      };
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
