import { gql } from '@apollo/client';

const queries = {
  /****************
   Class requests
   ****************/

  AllClasses: gql`
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
  SpecificUser: gql`
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
  UserFollowers: gql`
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

export default queries;
