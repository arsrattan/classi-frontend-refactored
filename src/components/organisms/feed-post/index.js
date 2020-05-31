import React from 'react';
import styles from './styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {fontFamily} from '_assets';
import {menuImg, likeBttnImg, commentBttnImg, shareBttnImg} from '_assets';

import {ProfileImg} from '_atoms';
import {MedHortClassCard, PostCommentTile} from '_molecules';

const FeedPost = ({showComment, post, navigation}) => (
  <View
    style={{
      paddingTop: 17,
      backgroundColor: '#ffffff',
    }}>
    {/* Post header */}
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        paddingHorizontal: 16,
      }}>
      <ProfileImg size="small" />
      <View
        style={{
          flex: 1,
          paddingLeft: 12,
          paddingTop: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* Name of the User making post */}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#102A43',
              fontSize: 15,
              lineHeight: 19,
              fontFamily: fontFamily.book,
            }}>
            {post.userName}
          </Text>
          {/* Action of post */}
          <Text>{post.postAction}</Text>
        </View>
        <Text
          style={{
            paddingTop: 2,
            color: '#334E68',
            fontSize: 13,
            lineHeight: 16,
            fontFamily: fontFamily.book,
          }}>
          {`on ${post.dateAndTime}`}
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={menuImg} style={{marginRight: 16}} />
      </TouchableOpacity>
    </TouchableOpacity>

    {/* Post Content */}
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <Text
        style={{
          fontFamily: fontFamily.book,
          fontSize: 15,
          lineHeight: 19,
          letterSpacing: -0.3,
          color: '#334E68',
        }}>
        {post.caption}
      </Text>

      {/* completed class details, this should pass a prop with the class details though */}
      <MedHortClassCard />
    </View>

    {/* Like, Comment, Share section */}
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      {/* dividing border, we might be able to just remove this*/}
      <View
        style={{
          borderWidth: 1,
          borderColor: 'rgba(161, 174, 183, 0.1)',
        }}
      />

      {/* # likes & comments */}
      <View style={{flexDirection: 'row', paddingTop: 8}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 19,
            color: '#334E68',
            fontFamily: fontFamily.book,
          }}>
          {post.likes}
        </Text>
        <Text
          style={{
            paddingLeft: 8,
            fontSize: 15,
            lineHeight: 19,
            color: '#334E68',
            fontFamily: fontFamily.book,
          }}>
          Likes
        </Text>
        {/* Condtional formating to show comment count if number of comment > 0 */}
        {post.comments > 0 && (
          <Text
            style={{
              paddingLeft: 8,
              fontWeight: 'bold',
              fontSize: 15,
              lineHeight: 19,
              color: '#334E68',
              fontFamily: fontFamily.book,
            }}>
            {post.comments}
          </Text>
        )}
        {/* Condtional formating to show comment text if number of comment > 0 */}
        {post.comments > 0 && (
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 15,
              lineHeight: 19,
              color: '#334E68',
              fontFamily: fontFamily.book,
            }}>
            Comments
          </Text>
        )}
      </View>

      {/* Like, Comment, Share buttons */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 16,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={likeBttnImg} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={commentBttnImg} style={{marginLeft: 16}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={shareBttnImg} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Conditional formatting for showing sepration line or not and show comments */}
    {showComment ? (
      <View style={{marginVertical: 10}} />
    ) : (
      <View
        style={{
          borderWidth: 1,
          borderColor: 'rgba(161, 174, 183, 0.1)',
          marginVertical: 20,
        }}
      />
    )}
    {post.comments > 0 && <View>{showComment && <PostCommentTile />}</View>}
    {post.comments > 0 && (
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllComments', {
              post: post,
            });
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.seeMore}>See more comments</Text>
        </TouchableOpacity>
        <View style={styles.seeMoreBorder} />
        {<View style={styles.viewDivider} />}
      </View>
    )}
  </View>
);

export default FeedPost;
