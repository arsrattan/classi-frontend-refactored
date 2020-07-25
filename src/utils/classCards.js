import React from 'react';
import { View, FlatList } from 'react-native';
import { ClassCard } from '_atoms';

const createClassCards = (classList, navigation, style) => {
  const styles = {
    view: { flex: 1, paddingVertical: 20 },
  };

  return (
    <View style={styles.view}>
      <FlatList
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
        data={classList}
        horizontal={true}
        renderItem={({ item }) => (
          <ClassCard
            navigation={navigation}
            item={item}
            showLive={true}
            style={style}
          />
        )}
        keyExtractor={(item) => {
          item.classId;
        }}
      />
    </View>
  );
};

export default createClassCards;
