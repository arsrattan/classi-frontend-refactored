import { gql } from '@apollo/client';

const queries = {
  AllClasses: gql`
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
  `,
  SpecificClass: gql`
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
  `,
  SpecificUser: gql`
    query GetUserById($userId: String!) {
      getUserById(userId: $userId) {
        userId
        firstName
        lastName
        s3url
      }
    }
  `,
  UserFollowers: gql`
    query GetUserFollowers($userId: String!) {
      getUserFollowers(userId: $userId) {
        userId
      }
    }
  `,
};

export default queries;
