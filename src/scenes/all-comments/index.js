import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {sendCommentImg, arrowBackDarkImg} from '_assets';
import {FeedPost} from '_organisms';

const AllCommentsScreen = ({navigation, route}) => {
  const {post} = route.params;

  const [input, setInput] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} enabled behavior="position">
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.allCommentsHeader}>
        <TouchableOpacity
          style={{position: 'absolute', top: 33, left: 16}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={arrowBackDarkImg} />
        </TouchableOpacity>
        <Text style={styles.commentsHeading}>Comments(3)</Text>
      </View>
      <View style={styles.postContainer}>
        <ScrollView>
          <FeedPost post={post} showComment={true} />
        </ScrollView>
      </View>
      <View style={styles.commentContainerView}>
        <View style={styles.writeCommentView}>
          <TextInput placeholder="Write a comments" />
        </View>
        <TouchableOpacity>
          <Image source={sendCommentImg} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AllCommentsScreen;
