import { View, Text } from 'react-native'
import React from 'react'
import updatedComponet from './HocComponent'

const Button2 = ({name, width, height, color}) => {
  return (
    <View
    style={{
      width: width,
      height: height,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text>{name}</Text>
    </View>
  )
}

export default updatedComponet(Button2);