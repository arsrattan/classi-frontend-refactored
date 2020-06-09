import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {ProfileImg} from '_atoms';

const PostCommentTile = ({comment}) => {
  const date = new Date(parseInt(comment.createdAt));
  const month = date.toLocaleString('default', {month: 'short'});
  return (
    <View style={styles.commentContainer}>
      <ProfileImg size="small" />
      <View style={styles.commentTile}>
        <View style={styles.commentTextContainer}>
          <Text style={styles.userName}>{comment.createdBy}</Text>
          <Text style={styles.commentDateAndTime}>
            {date.toLocaleString('en-us', {weekday: 'short'})}, {month}{' '}
            {date.getDate()}
          </Text>
          <Text style={styles.commentDateAndTime}>
            {date.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </View>
        <Text style={styles.commentText}>{comment.message}</Text>
      </View>
    </View>
  );
};

export default PostCommentTile;
