import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const GetUser = (userId) => {
  const [state, setState] = useState({ data: null, loading: true });
  const GET_USER = gql`
    query GetUserById($userId: String!) {
      getUserById(userId: $userId) {
        userId
        firstName
        lastName
        s3url
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_USER, {
    variables: { userId: userId },
  });
  useEffect(() => {
    setState({ data: null, loading: true });
    if (!error && !loading) {
      setState({
        data: data.getUserById,
        loading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};

export const GetAllUsers = () => {
  const [state, setState] = useState({
    allUsersData: [],
    allUsersLoading: true,
  });
  const GET_ALL_USERS = gql`
    {
      getAllUsers {
        userId
        s3url
        firstName
        lastName
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_ALL_USERS);
  useEffect(() => {
    setState({ allUsersData: [], allUsersLoading: true });
    if (!error && !loading) {
      setState({
        allUsersData: data.getAllUsers,
        allUsersLoading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};

export const GetUserFollowers = (userId) => {
  const [state, setState] = useState({ followersData: [], loading: true });
  const GET_USER_FOLLOWERS = gql`
    query GetUserFollowers($userId: String!) {
      getUserFollowers(userId: $userId) {
        userId
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_USER_FOLLOWERS, {
    variables: { userId: userId },
  });
  useEffect(() => {
    setState({ followersData: [], loading: true });
    if (!error && !loading) {
      setState({
        followersData: data.getUserFollowers,
        loading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};

export const GetUserFollowing = (userId) => {
  const [state, setState] = useState({
    followingData: [],
    followingLoading: true,
  });
  const GET_USER_FOLLOWING = gql`
    query GetUserFollowing($userId: String!) {
      getUserFollowing(userId: $userId) {
        userId
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_USER_FOLLOWING, {
    variables: { userId: userId },
  });
  useEffect(() => {
    setState({ followingData: [], followingLoading: true });
    if (!error && !loading) {
      setState({
        followingData: data.getUserFollowing,
        followingLoading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};

export const GetUserNotifications = (userId) => {
  const [state, setState] = useState({
    notificationData: [],
    notificationLoading: true,
  });
  const GET_USER_NOTIFICATIONS = gql`
    query GetUserNotifications($userId: String!) {
      getUserNotifications(userId: $userId) {
        userId
        triggeringUserId
        triggeringClassId
        notificationType
        notificationId
        createdAt
        triggeringUserS3Url
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_USER_NOTIFICATIONS, {
    variables: { userId: userId },
  });
  useEffect(() => {
    setState({ notificationData: [], notificationLoading: true });
    if (!error && !loading) {
      setState({
        notificationData: data.getUserNotifications,
        notificationLoading: false,
      });
    }
  }, [data, error, loading]);

  return state;
};

export const GetCurrentUserId = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    const asyncFetchToken = async () => {
      const res = await AsyncStorage.getItem('USER_ID');
      setState(res);
    };
    asyncFetchToken();
  }, [state]);
  return state;
};
