import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import queries from './queries';

export function GetAllClasses() {
  console.log(`GetAllClasses called`);
  //const [state, setState] = useState({ data: [], loading: true });
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
  if (error) {
    console.log(`Error! ${error.message}`);
  }
  console.log(`data: ${data}`);
  return { classData: data, classLoading: loading };
  /*
  useEffect(() => {
    setState({ data: [], loading: true, error: null });
    if (!error && !loading) {
      console.log(`class data: ${data.length}`);
      setState({
        data: data.getAllClasses,
        loading: false,
      });
    } else {
      console.log(error);
    }
  }, [data, error, loading]);
  return { classData: state.data, classLoading: state.loading };
  */
}

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

// Get classes a user is registered for
export const GetUserRegisteredClasses = (userId) => {
  console.log(`GetRegister called`);
  const [state, setState] = useState({ data: [], loading: true });

  const { data, error, loading } = useQuery(queries.GetRegistered, {
    variables: { userId: userId },
  });

  useEffect(() => {
    setState({ data: [], loading: true });
    if (!error && !loading) {
      setState({
        data: data,
        loading: false,
      });
    } else {
      console.log(error);
    }
  }, [data, error, loading]);
  return {
    registeredClassData: state.data,
    registeredClassLoading: state.loading,
  };
};
