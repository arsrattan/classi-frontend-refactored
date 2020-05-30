import * as React from 'react'
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native'
import { Tooltip } from 'react-native-elements'
import { fontFamily, menuImg, unregisterImg, shareImgDark } from '_assets'

const PopoverMenu = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Tooltip
        pointerColor='#fff'
        overlayColor='rgba(52, 52, 52, 0.8)'
        toggleOnPress={true}
        containerStyle={{
          width: 180,
          height: 113,
          backgroundColor: '#fff',
          borderRadius: 10,
        }}
        popover={
          <View
            style={{
              flex: 1,
              paddingLeft: 18,
              paddingVertical: 18,
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Shared')
              }}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Image source={shareImgDark} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  lineHeight: 19,
                  color: '#334E68',
                  paddingLeft: 13,
                  fontFamily: fontFamily.book,
                }}
              >
                Share Class
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Unregistered')
              }}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Image source={unregisterImg} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  lineHeight: 19,
                  color: '#D93900',
                  paddingLeft: 13,
                  fontFamily: fontFamily.book,
                }}
              >
                Unregister Class
              </Text>
            </TouchableOpacity>
          </View>
        }
      >
        <Image source={menuImg} />
      </Tooltip>
    </View>
  )
}
export default PopoverMenu
