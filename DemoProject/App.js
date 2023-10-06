/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {Text, View, StyleSheet, SectionList, Button, Alert} from 'react-native';
import {UserData} from './Component/UserData';

class App extends Component { // React.Component

  constructor(){
    super()
    this.name = 'Class Component'
  }
 showMessage2() { // can't use function keyword
    this.name = "Singh" // ???? how to change this and re render
    Alert.alert('showMessage2');
  }

  showMessage=()=>{ // can't use const keyword
    this.name = "Singh" // ???? how to change this and re render
    Alert.alert('Button message');
  }
  // call without this show can't find var showMessage
  render() {
    return(
      <View style={{backgroundColor:'white', flex: 1, marginTop:70}}>
        <Text style={{fontSize: 30}}>{this.name}</Text>
        <Button title='press me' onPress={this.showMessage2}></Button>
      </View>
    )
  }
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 70,
    backgroundColor: 'white',
  },
});
export default App;