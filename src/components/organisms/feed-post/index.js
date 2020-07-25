import React from 'react';
import moment from 'moment';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  commentBttnImg,
  likeBttnImg,
  likedBttnImg,
  menuImg,
  shareBttnImg,
} from '_assets';
import { ProfileImg } from '_atoms';
import { MedHortClassCard, PostCommentTile } from '_molecules';
import { Spacing } from '_styles';
import { useEffect, useState } from 'react';
import styles from './styles';
import { useMutation, gql } from '@apollo/client';
// import { GetClass } from '../../../utils/backendServices/classService';
import { GetCurrentUserId } from '../../../utils/backendServices/usersService';
import { GraphQLClient } from '_services';

moment().format();

var postTypeText = function (type) {
  let text = '';
  if (type == 'Registered_Class') {
    text = 'registered for a class';
  } else if (type == 'Completed_Class') {
    text = 'completed class';
  } else if (type == 'Created_Class') {
    text = 'created a class';
  }
  return text;
};

const FeedPost = ({ allComments, post, navigation }) => {
  var checkIfLikedPost = function (userId, likes) {
    let res = false;
    for (let like of likes) {
      if (like == userId) {
        res = true;
      }
    }
    return res;
  };

  // const { classData } = GetClass(post.classId);
  const { data, error, loading } = GraphQLClient.queryClassById(post.classId);
  console.log(`Received data: ${data}`);
  console.log(`Received error: ${error}`);
  console.log(`Received loading: ${loading}`);

  const userId = GetCurrentUserId();
  const [isActive, setIsActive] = useState(false); //useState(!checkIfLikedPost(userId, post.likes));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const LIKE_POST = gql`
    mutation LikePost(
      $userId: String!
      $postId: String!
      $postCreator: String!
      $isUnlike: Boolean!
    ) {
      likePost(
        userId: $userId
        postId: $postId
        postCreator: $postCreator
        isUnlike: $isUnlike
      )
    }
  `;
  const [likePost, mutationData] = useMutation(LIKE_POST);
  const handleSubmit = () => {
    setIsActive(!isActive);
    if (!isActive) {
      post.likes == null ? (post.likes = [userId]) : post.likes.push(userId);
    } else {
      post.likes == null
        ? (post.likes = null)
        : (post.likes = post.likes.filter(function (p) {
            return p != userId;
          }));
    }
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      likePost({
        variables: {
          userId: userId,
          postCreator: post.createdBy,
          isUnlike: !isActive,
          postId: post.postId,
        },
        // update: (cache) => {
        //   try {
        //     let likes = cache.readQuery({ query: GET_USER_FOLLOWING, variables: {userId: userId}});
        //     if(checkIfFollowingUser(followedUser, following.getUserFollowing)){
        //       following.getUserFollowing = following.getUserFollowing.filter(function(p) {
        //         return p.userId != followedUser;
        //       })
        //     }
        //     else {
        //       following.getUserFollowing.push({userId: followedUser, __typename: "User"});
        //     }
        //     cache.writeQuery({
        //       query: GET_USER_FOLLOWING,
        //       data: {
        //           'getUserFollowing': []
        //       }
        //     });
        //   } catch (e) {
        //       console.log(e);
        //   }
        // }
      })
        .then(({ data }) => {
          setIsSubmitting(false);
        })
        .catch((e) => {
          console.log(e);
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting, isActive]);

  return (
    <View style={styles.feedPostContainer}>
      {/* Post header */}
      <TouchableOpacity style={styles.feedPostHeaderContainer}>
        <ProfileImg userProfileImg={post.users3url} size="small" />
        <View style={styles.feedPostHeaderTextContainer}>
          {/* Name of the User making post */}
          <Text style={styles.h3d1}>
            {post.createdBy + ' ' + postTypeText(post.postType, data[0])}
          </Text>
          <Text style={styles.p2d2}>{`${moment(
            parseInt(post.createdAt),
          ).fromNow()}`}</Text>
        </View>
        {/* <TouchableOpacity>
          <Image source={menuImg} style={styles.iconNormal} />
        </TouchableOpacity> */}
      </TouchableOpacity>

      {/* Post Content */}
      <View style={styles.postDetailsContainer}>
        <Text style={styles.p1d1}>{post.caption}</Text>
        {/* completed class details, this should pass a prop with the class details though */}
        <View style={styles.classDetailsContainer}>
          <MedHortClassCard navigation={navigation} classData={data} />
        </View>
      </View>

      <View style={styles.dividingBorder} />

      {/* # likes/comments */}
      <View style={styles.likeContainer}>
        {/* # likes & comments */}
        <Text style={styles.p1d1}>
          {post.likes == null ? 0 + ' likes' : post.likes.length + ' likes'}
        </Text>
        {/* Condtional formating to show comment count if number of comment > 0 */}
        {post.comments > 0 && (
          <Text style={[styles.p1d1, { paddingLeft: Spacing.small }]}>
            {post.comments + ' Comments'}
          </Text>
        )}
      </View>

      {/* Like, Comment, Share buttons */}
      <View style={styles.interactionButtonContainer}>
        <View style={styles.likeCommentContainer}>
          <TouchableOpacity
            style={styles.likeButtonContainer}
            onPress={handleSubmit}>
            <Image
              source={isActive ? likedBttnImg : likeBttnImg}
              style={styles.iconLarge}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={commentBttnImg} style={styles.iconLarge} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity>
          <Image source={shareBttnImg} style={styles.iconLarge} />
        </TouchableOpacity> */}
      </View>
      {allComments === false ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllComments', {
              post: post,
            });
          }}
          style={styles.allCommentContainer}>
          <Text style={styles.p1d2}>View all comments</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.allCommentContainer} />
      )}
      {post.comments.length > 0 && (
        <View style={styles.commentTileContainer}>
          {/* <PostCommentTile /> */}
        </View>
      )}
    </View>
  );
};

export default FeedPost;
