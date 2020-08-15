import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import queries from './queries';

export const GetAllClasses = () => {
  const [returnedData, setReturnedData] = useState([]);
  const [queryLoading, setQueryLoading] = useState(true);
  const [errorReturned, setErrorReturned] = useState(undefined);

  const ALL_CLASSES = gql`
    {
      getAllClasses {
        classId
        className
        classType
        class_image_url
        channel_thumbnail_url
        difficulty
        expectedDuration
        instructorUserId
        description
        requiredEquipment
        isPrivate
        comments
        view_count
      }
    }
  `;
  const { data, error, loading } = useQuery(ALL_CLASSES);

  useEffect(() => {
    setQueryLoading(true);
    if (!error && !loading) {
      console.log(`inside if statement`);
      setReturnedData(['hello'], () =>
        console.log(`data value: ${JSON.stringify(returnedData)}`),
      );
      setQueryLoading(false);
    } else if (error) {
      setErrorReturned(error);
      setQueryLoading(loading);
    }
  }, [data, error, loading]);

  return { data: returnedData, error: errorReturned, loading: queryLoading };
};

export const GetClass = (classId) => {
  const [state, setState] = useState({ classData: {}, classLoading: true });
  const GET_CLASS = gql`
    query GetClassById($classId: String!) {
      getClassById(classId: $classId) {
        classId
        className
        classType
        class_image_url
        channel_thumbnail_url
        difficulty
        expectedDuration
        instructorUserId
        description
        requiredEquipment
        isPrivate
        comments
        view_count
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_CLASS, {
    variables: { classId: classId },
  });
  useEffect(() => {
    setState({ classData: {}, classLoading: true });
    if (!error && !loading) {
      setState({
        classData: data.getClassById,
        classLoading: false,
      });
    }
  }, [data, error, loading]);
  return state;
};
