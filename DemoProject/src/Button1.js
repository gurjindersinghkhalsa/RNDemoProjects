import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import updatedComponet from './HocComponent';

const Button1 = ({name, width, height, color, clickMe}) => {
  return (
    <TouchableOpacity
    style={{
      width: width,
      height: height,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={()=>{
      clickMe()
    }}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}
export default updatedComponet(Button1)