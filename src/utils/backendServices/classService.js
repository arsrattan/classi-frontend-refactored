import { gql } from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

export const GetAllClasses = () => {
  const [state, setState] = useState({ data: [], loading: true });
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
    setState({ data: [], loading: true, error: null });
    if (!error && !loading) {
      setState({
        data: data.getAllClasses,
        loading: false,
      });
    }
  }, [data, error, loading]);
  return state;
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
