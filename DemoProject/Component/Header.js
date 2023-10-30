import { View, Text } from 'react-native'
import React from 'react'

const Header =()=>{
  return (
    <View style={{backgroundColor: 'orange',marginTop: 30, flexDirection:'row', justifyContent:'flex-end'}}>
      <Text style={{fontSize: 30, fontWeight:'500', color: 'red', padding: 10}}>0</Text>
    </View>
  )
}

export default Header;