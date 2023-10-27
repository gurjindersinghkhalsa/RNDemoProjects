/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Student from './Student';
class App extends Component {
  constructor() {
    super(); // calling parent calls constructor
    this.state = { // state obj
      name: 'Gurjinder Singh', // this is state
    };
    // creates function once per component instance prefer this one
    // this.changeName = this.changeName.bind(this) // for update state on button click
  }
  updateName(val) {
    this.setState({name: val})
  }
  changeName() {
    this.setState({name: 'on click update'})
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1, marginTop: 120}}>
        <Text>Hi Friends {this.state.name}</Text>
        <TextInput
          placeholder="Enter you name"
          onChangeText={val => this.updateName(val)}
        />

        <Button
          title="Press me"
          style={{backgroundColor: 'red'}}
          /* creates new function on every render call so avoid*/
          onPress={()=>this.changeName()}
            //OR
          // onPress={this.changeName.bind(this)}
        />
        <Student name={this.state.name}/>
      </View>
    );
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
