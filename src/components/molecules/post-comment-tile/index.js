import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import styles from './styles';
import { ProfileImg } from '_atoms';

const CommentTileInstance = ({ comment }) => {
  //const date = new Date(parseInt(comment.createdAt));
  //const month = date.toLocaleString('default', { month: 'short' });
  return (
    <View style={styles.commentContainer}>
      <ProfileImg size="small" />
      <View style={styles.commentTile}>
        <View style={styles.commentTextContainer}>
          <Text style={styles.userName}>{comment.userId}</Text>
          {/* date is not returned by backend rn 
          
          <Text style={styles.commentDateAndTime}>
            {date.toLocaleString('en-us', { weekday: 'short' })}, {month}{' '}
            {date.getDate()}
          </Text> 
          <Text style={styles.commentDateAndTime}>
            {date.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text> */}
        </View>
        <Text style={styles.commentText}>{comment.data}</Text>
      </View>
    </View>
  );
};

const PostCommentTile = ({ comments }) => {
  return (
    <View>
      {comments.map((item) => {
        return <CommentTileInstance comment={item} />;
      })}
    </View>
  );
};

export default PostCommentTile;
