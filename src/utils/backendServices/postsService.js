import { gql } from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

export const GetAllPosts = (userId) => {
  const [state, setState] = useState({ postsData: [], postsLoading: true });
  const ALL_POSTS = gql`
    query GetAllPostsForUser($userId: String!) {
      getAllPostsForUser(userId: $userId) {
        postId
        postType
        createdBy
        createdAt
        comments
        likes
        classId
        users3url
      }
    }
  `;
  const { data, error, loading } = useQuery(ALL_POSTS, {
    variables: { userId: userId },
  });
  useEffect(() => {
    setState({ postsData: [], postsLoading: true, error: null });
    if (!error && !loading) {
      setState({
        postsData: data.getAllPostsForUser,
        postsLoading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};
