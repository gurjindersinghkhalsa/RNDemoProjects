import { View, Text } from 'react-native'
import React from 'react'
import ComponentB from './ComponentB'
 const ComponentA = () => {
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text>ComponentA</Text>
      {/* <ComponentB/> */}
    </View>
  )
}

export const ComponentA1 = () => {
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text>ComponentA1</Text>
      {/* <ComponentB/> */}
    </View>
  )
}
export default ComponentA;