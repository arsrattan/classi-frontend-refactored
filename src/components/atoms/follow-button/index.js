import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
/*import {
  FollowUser,
  GetCurrentUserId,
} from '../../../utils/backendServices/usersService';*/
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-boost';
import { UsersService } from '_utils';
import { useEffect, useState } from 'react';

const FollowButton = ({ followedUser, isUnfollow, active }) => {
  var checkIfFollowingUser = function (userId, followingData) {
    let res = false;
    for (let follower of followingData) {
      if (follower.userId == userId) {
        res = true;
      }
    }
    return res;
  };

  const userId = UsersService.GetCurrentUserId();

  const [isActive, setIsActive] = useState(active);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FOLLOW_USER = gql`
    mutation ToggleFollow(
      $userId: String!
      $followedUser: String!
      $isUnfollow: Boolean!
    ) {
      toggleFollow(
        userId: $userId
        followedUser: $followedUser
        isUnfollow: $isUnfollow
      )
    }
  `;
  const GET_USER_FOLLOWING = gql`
    query GetUserFollowing($userId: String!) {
      getUserFollowing(userId: $userId) {
        userId
      }
    }
  `;
  const [followUser, { data, loading, error }] = useMutation(FOLLOW_USER);

  const handleSubmit = () => {
    setIsActive(!isActive);
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      followUser({
        variables: {
          userId: userId,
          followedUser: followedUser,
          isUnfollow: isUnfollow,
        },
        update: (cache) => {
          try {
            let following = cache.readQuery({
              query: GET_USER_FOLLOWING,
              variables: { userId: userId },
            });
            if (
              checkIfFollowingUser(followedUser, following.getUserFollowing)
            ) {
              following.getUserFollowing = following.getUserFollowing.filter(
                function (p) {
                  return p.userId != followedUser;
                },
              );
            } else {
              following.getUserFollowing.push({
                userId: followedUser,
                __typename: 'User',
              });
            }
            cache.writeQuery({
              query: GET_USER_FOLLOWING,
              data: {
                getUserFollowing: [],
              },
            });
          } catch (e) {
            console.log(e);
          }
        },
      })
        .then(({ data }) => {
          setIsSubmitting(false);
        })
        .catch((e) => {
          console.log(e);
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting]);

  return (
    <TouchableOpacity
      style={isActive ? styles.followingBtn : styles.followBtn}
      onPress={handleSubmit}>
      <Text style={isActive ? styles.followingTxt : styles.followTxt}>
        {isActive ? 'Following' : 'Follow Back'}
      </Text>
    </TouchableOpacity>
  );
};
export default FollowButton;
