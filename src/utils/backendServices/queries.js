import { gql } from '@apollo/client';

export const Queries = {
  /****************
   Class requests
   ****************/

  GetAllClasses: gql`
    query {
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
        imageKey
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

  GetRegistered: gql`
    query GetRegistrationsForUser($userId: String!) {
      getRegistrationsForUser(username: $userId) {
        registrationId
        username
        groupId
        classId
        scheduledTime
        createdAt
      }
    }
  `,

  /****************
   Post requests
   ****************/

  UserPosts: gql`
    query GetAllPostsForUser($userId: String!) {
      getAllPostsForUser(userId: $userId) {
        postId
        postType
        caption
        userId
        createdAt
        comments
        likes
        classId
        users3url
      }
    }
  `,

  /****************
   User requests
   ****************/

  AllUsers: gql`
    {
      getAllUsers {
        userId
        s3url
        firstName
        lastName
        biography
        userGroups
      }
    }
  `,
  GetSpecificUser: gql`
    query GetUserById($userId: String!) {
      getUserById(userId: $userId) {
        userId
        firstName
        lastName
        s3url
        biography
        userGroups
      }
    }
  `,
  GetUserFollowers: gql`
    query GetUserFollowers($userId: String!) {
      getUserFollowers(userId: $userId) {
        userId
      }
    }
  `,

  /****************
   Groups requests
   ****************/

  SpecificGroup: gql`
    query GetGroupById($groupId: String!) {
      getGroupById(groupId: $groupId) {
        groupId
        name
        members
        savedClasses
        scheduledClasses
        pastClasses
        createdTime
      }
    }
  `,

  UserGroups: gql`
    query GetGroupsByUserId($userId: String!) {
      getGroupsByUserId(userId: $userId) {
        groupId
        name
        members
        savedClasses
        scheduledClasses
        pastClasses
        createdTime
      }
    }
  `,

  CreateGroup: gql`
    mutation CreateGroup($data: CreateGroupInput!) {
      createGroup(
        userId: $userId
        followedUser: $followedUser
        isUnfollow: $isUnfollow
      )
    }
  `,
};
