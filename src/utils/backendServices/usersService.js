import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {useEffect, useState} from 'react';

export const GetUser = (userId) => {
  const [state, setState] = useState({data: null, loading: true});
  const GET_USER = gql`
    query GetUserById($userId: String!) {
      getUserById(userId: $userId) {
        userId
        firstName
        lastName
      }
    }
  `;
  const {data, error, loading} = useQuery(GET_USER, {
    variables: {userId: userId},
  });
  useEffect(() => {
    setState({data: null, loading: true});
    if (!error && !loading) {
      setState({
        data: data.getUserById,
        loading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};
