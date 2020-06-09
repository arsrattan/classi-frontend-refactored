import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Tile} from '_atoms';

const Tab = createMaterialTopTabNavigator();

const ClassNavigator = ({classDetails}) => {
  const AboutTile = () => <Tile text={classDetails.description} />;

  const EquipmentTile = () => <Tile text={classDetails.requiredEquipment} />;
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: '#F86A6A'},
        labelStyle: {fontWeight: 'bold', textTransform: 'capitalize'},
      }}>
      <Tab.Screen name="About this class" component={AboutTile} />
      <Tab.Screen name="Required Equipment" component={EquipmentTile} />
    </Tab.Navigator>
  );
};

export default ClassNavigator;
