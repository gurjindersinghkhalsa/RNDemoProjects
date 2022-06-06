/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
// function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Pressable
          onPress={() => {
            this.setState({value: this.state.value + 1}, () => {
              console.log('Increment', this.state.value);
            });
          }}>
          <Text
            style={{backgroundColor: 'pink', padding: 15, fontWeight: '600'}}>
            Increment
          </Text>
        </Pressable>
        <Text
        style={{padding: 15, fontWeight: '600'}}>
          Vale is {this.state.value}</Text>
      </View>
    );
  }
}
export default App;
