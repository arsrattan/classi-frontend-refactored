import React from 'react';
import { View, FlatList } from 'react-native';
import { ClassCard } from '_atoms';

const createClassCards = (classList, navigation) => (
    <View style={{ flex: 1, paddingVertical: 20 }}>
        <FlatList
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
        data={classList}
        horizontal={true}
        renderItem={({ item }) => (
            <ClassCard navigation={navigation} item={item} showLive={true} />
        )}
        keyExtractor={(item) => {
            item.id
        }}
        />
    </View>
);

export default createClassCards;