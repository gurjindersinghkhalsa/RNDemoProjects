import { View, Text } from 'react-native'
import React from 'react'
import ComponentD from './ComponentD'
const ComponentC = () => {
  return (
<View style={{padding: 20, alignItems: 'center'}}>
      <Text>ComponentC</Text>
      <ComponentD/>
    </View>
  )
}

export default ComponentC