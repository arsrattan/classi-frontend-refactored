import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import {ProfileImg, Divider, PopupMenu, MenuTile} from '_atoms';
import {Header, MultiProfileImg, SmallHortClassCard} from '_molecules';
import {Typography, Icons, Spacing, Colors} from '_styles';
import {
  menuImg,
  arrowBackDarkImg,
  settingsImg,
  unregisterImg,
  editDarkImg,
  forwardArrowImg,
} from '_assets';
import {createClassCards, classData} from '_utils';

const GroupDetailsScreen = ({navigation}) => {
  /* state should be group name retrieved from backend */
  const [groupName, setGroupName] = useState('Group Name');
  const inputRef = React.useRef();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          navigation={navigation}
          backgroundColor={Colors.white}
          text={
            <Text style={{...Typography.p1d2, ...Typography.bold}}>
              Workout Group
            </Text>
          }
          leftIcon={arrowBackDarkImg}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
          rightIcon={settingsImg}
          onPressRightIconAlt={
            <PopupMenu
              icon={settingsImg}
              options={[
                <MenuTile
                  icon={unregisterImg}
                  text="Leave group"
                  navigation={navigation}
                  screen="GroupsScreen"
                />,
              ]}
            />
          }
        />
      </View>
      <ScrollView bounces={false}>
        <View style={styles.sectionContainer}>
          <View style={{marginBottom: Spacing.small, alignItems: 'center'}}>
            <ProfileImg
              size="large"
              userProfileImg="https://classi-profile-pictures.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-17+at+00.16.41.png"
              isChangeable={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* ref is used so that clicking edit icon will keyboard and edit group name*/}
            <TextInput
              style={{
                ...Typography.h1,
                ...Typography.bold,
                color: Colors.aquarius,
              }}
              ref={inputRef}
              value={groupName}
              onChange={(text) => setGroupName(text)}
            />
            <TouchableOpacity onPress={() => inputRef.current.focus()}>
              <Image source={editDarkImg} style={Icons.smaller} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GroupMembersScreen');
            }}
            style={{paddingVertical: Spacing.small, ...styles.flexRow}}>
            <MultiProfileImg userList={['Derek', 'Malik', 'Anmol', 'Arnim']} />
            <Image source={forwardArrowImg} style={Icons.smaller} />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainerNoMargin}>
          <Text
            style={{
              ...Typography.h3,
              marginHorizontal: Spacing.base,
              marginTop: Spacing.base,
            }}>
            Upcoming Classes
          </Text>
          {createClassCards(classData, navigation, {
            borderWidth: 1,
            borderColor: Colors.cassiopeia,
            backgroundColor: Colors.lightGrey,
          })}
        </View>
        <View style={styles.sectionContainer}>
          <Text
            style={{
              ...Typography.h3,
              marginVertical: Spacing.base,
            }}>
            Completed Classes
          </Text>
          <SmallHortClassCard
            hasBackground={true}
            style={{marginBottom: Spacing.smaller}}
          />
          <SmallHortClassCard hasBackground={true} />
        </View>
      </ScrollView>
    </View>
  );
};

export default GroupDetailsScreen;
