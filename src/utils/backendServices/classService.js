import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {useEffect, useState} from 'react';

export const GetAllClasses = () => {
  const [state, setState] = useState({data: null, loading: true});
  const ALL_CLASSES = gql`
    {
      getAllClasses {
        classId
        className
        classType
        difficulty
        expectedDuration
        instructorUserId
        description
        requiredEquipment
        isPrivate
        registeredUsers
        scheduledTime
      }
    }
  `;
  const {data, error, loading} = useQuery(ALL_CLASSES);
  useEffect(() => {
    setState({data: null, loading: true});
    if (!error && !loading) {
      setState({
        data: data.getAllClasses,
        loading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};
