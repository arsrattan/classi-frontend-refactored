import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { fontFamily } from '_assets';

// Need to figure out what data is passed in here

const MedHortClassCard = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: '#FAFAFC',
            borderWidth: 1,
            borderColor: 'rgba(161, 174, 183, 0.1)',
            borderRadius: 10,
            height: 106,
            marginTop: 16,
            padding: 8,
            flexDirection: 'row',
        }}
    >
        <Image
            source={{ uri: 'https://placebeard.it/640x360' }}
            style={{ height: 90, width: 90, borderRadius: 5 }}
        />
        <View style={{ paddingLeft: 8, paddingTop: 2 }}>
            <Text
                style={{
                    color: '#102A43',
                    fontSize: 15,
                    lineHeight: 19,
                    fontFamily: fontFamily.book,
                    fontWeight: '500',
                    letterSpacing: -0.3,
                }}
            >
                Cooking for Dummies
            </Text>
            <Text
                style={{
                    paddingTop: 4,
                    color: '#334E68',
                    fontSize: 15,
                    lineHeight: 22,
                    fontFamily: fontFamily.book,
                }}
            >
                by Tafia Salsabila
            </Text>
            <Text
                style={{
                    paddingTop: 8,
                    color: '#334E68',
                    fontSize: 12,
                    lineHeight: 15,
                    fontFamily: fontFamily.book,
                }}
            >
                on 12 April 2019 at 10:47 AM
            </Text>
        </View>
    </TouchableOpacity>
)

export default MedHortClassCard;