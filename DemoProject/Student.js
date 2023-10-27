import { View, Text } from 'react-native'
import React, { Component } from 'react'

class Student extends Component{
  render() {
    return (
      <View>
        <Text>Student {this.props.name}</Text>
      </View>
    )
  }
}



export default Student;