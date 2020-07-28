import { gql } from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

export const GetGroup = (groupId) => {
    const [state, setState] = useState({ groupData: {}, groupLoading: true });
    const GET_GROUP = gql`
      query GetGroupById($groupId: String!) {
        getGroupById(groupId: $groupId) {
          groupId
          name
          members
        }
      }
    `;
    const { data, error, loading } = useQuery(GET_GROUP, {
      variables: { groupId: groupId },
    });
    useEffect(() => {
      setState({ groupData: {}, groupLoading: true });
      if (!error && !loading) {
        setState({
            groupData: data.getGroupById,
            groupLoading: false,
        });
      }
    }, [data, error, loading]);
    return state;
  };
