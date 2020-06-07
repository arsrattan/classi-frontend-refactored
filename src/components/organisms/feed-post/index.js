import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {commentBttnImg, likeBttnImg, menuImg, shareBttnImg} from '_assets';
import {ProfileImg} from '_atoms';
import {MedHortClassCard, PostCommentTile} from '_molecules';
import {Spacing} from '_styles';
import styles from './styles';

const FeedPost = ({allComments, post, navigation}) => (
  <View style={styles.feedPostContainer}>
    {/* Post header */}
    <TouchableOpacity style={styles.feedPostHeaderContainer}>
      <ProfileImg size="small" />
      <View style={styles.feedPostHeaderTextContainer}>
        {/* Name of the User making post */}
        <Text style={styles.h3d1}>{post.userName + post.postAction}</Text>
        <Text style={styles.p2d2}>{`on ${post.dateAndTime}`}</Text>
      </View>
      <TouchableOpacity>
        <Image source={menuImg} style={styles.iconNormal} />
      </TouchableOpacity>
    </TouchableOpacity>

    {/* Post Content */}
    <View style={styles.postDetailsContainer}>
      <Text style={styles.p1d1}>{post.caption}</Text>
      {/* completed class details, this should pass a prop with the class details though */}
      <View style={styles.classDetailsContainer}>
        <MedHortClassCard />
      </View>
    </View>

    <View style={styles.dividingBorder} />

    {/* # likes/comments */}
    <View style={styles.likeContainer}>
      {/* # likes & comments */}
      <Text style={styles.p1d1}>{post.likes + ' Likes'}</Text>
      {/* Condtional formating to show comment count if number of comment > 0 */}
      {post.comments > 0 && (
        <Text style={[styles.p1d1, {paddingLeft: Spacing.small}]}>
          {post.comments + ' Comments'}
        </Text>
      )}
    </View>

    {/* Like, Comment, Share buttons */}
    <View style={styles.interactionButtonContainer}>
      <View style={styles.likeCommentContainer}>
        <TouchableOpacity style={styles.likeButtonContainer}>
          <Image source={likeBttnImg} style={styles.iconLarge} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={commentBttnImg} style={styles.iconLarge} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={shareBttnImg} style={styles.iconLarge} />
      </TouchableOpacity>
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
    {post.comments > 0 && (
      <View style={styles.commentTileContainer}>
        <PostCommentTile />
      </View>
    )}
  </View>
);

export default FeedPost;
