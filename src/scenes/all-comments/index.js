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
import {InputBox} from '_atoms';
import {FeedPost} from '_organisms';

const AllCommentsScreen = ({navigation, route}) => {
  const {post} = route.params;

  const [input, setInput] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} enabled behavior="position">
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.allCommentsHeader}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={arrowBackDarkImg} style={styles.iconNormal} />
        </TouchableOpacity>
        <Text style={styles.commentsHeading}>Comments(3)</Text>
      </View>
      <View style={styles.postContainer}>
        <ScrollView>
          <FeedPost post={post} allComments={true} />
        </ScrollView>
      </View>
      <View style={styles.commentContainerView}>
        <InputBox placeholderText={'Write a comment'} icon={sendCommentImg} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AllCommentsScreen;
