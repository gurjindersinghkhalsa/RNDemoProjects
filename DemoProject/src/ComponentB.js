import { View, Text } from 'react-native'
import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
<View style={{padding: 20, alignItems: 'center'}}>
      <Text>ComponentB</Text>
      <ComponentC/>
    </View>
  )
}

export default ComponentB