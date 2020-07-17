import React from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import {searchImg} from '_assets';
import {InputBox} from '_atoms';
import {InviteTile} from '_molecules';
import {Icons, Typography, Spacing, Colors} from '_styles';
import styles from './styles';

const SearchUsers = ({navigation, title, searchValue, handleSearchValue}) => {
  return (
    <View style={styles.sectionContainerPadded}>
      <Text style={Typography.h3d1}>{title}</Text>
      <View style={{paddingTop: Spacing.small}}>
        <InputBox
          placeholderText={'Search for friends'}
          icon={searchImg}
          value={searchValue}
          onChange={handleSearchValue}
        />
      </View>
      <FlatList
        data={[
          {
            userID: 'Malik',
          },
          {
            userID: 'Derek',
          },
          {
            userID: 'Anmol',
          },
          {
            userID: 'Arnim',
          },
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          searchValue !== '' ? (
            searchValue === item.userID ? (
              <InviteTile name={item.userID} isInvite={true} />
            ) : null
          ) : (
            <InviteTile name={item.userID} isInvite={true} />
          )
        }
      />
    </View>
  );
};

export default SearchUsers;
