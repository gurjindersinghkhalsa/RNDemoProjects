import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const UserData=(param)=>{
  let value = param.item;
  
  return(
    <Text style={style.text}>{value.name}</Text>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 26,
    borderWidth: 1,
    margin: 10,
    color: 'blue',
    padding: 10,
    borderRadius: 10,
  },
})
