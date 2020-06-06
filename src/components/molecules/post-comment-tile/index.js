import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {ProfileImg} from '_atoms';

const PostCommentTile = () => (
  <View style={styles.commentContainer}>
    <ProfileImg size="small" />
    <View style={styles.commentTile}>
      <View style={styles.commentTextContainer}>
        <Text style={styles.userName}>Shawn Carter</Text>
        <Text style={styles.commentDateAndTime}>wed, apr 26</Text>
        <Text style={styles.commentDateAndTime}>6.30pm</Text>
      </View>
      <Text style={styles.commentText}>
        Thank you for sharing your experiences. I want join that class next week
        as well.
      </Text>
    </View>
  </View>
);

export default PostCommentTile;
