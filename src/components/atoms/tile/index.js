import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Tile = ({ text }) => (
    <View
        style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 16,
        }}>
        <Text
        style={{
            fontSize: 15,
            lineHeight: 15,
            letterSpacing: -0.3,
            color: '#334E68',
        }}>
            {text}
        </Text>
    </View>
);

export default Tile;