import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  doIncrementNow() {
    this.setState({value: this.state.value + 1}, () => {
      console.log('Final value is ->', this.state.value);
    });
  }
  doResetNow() {
    this.setState({value: 0})
  }
  render() {
    return (
      <View style={styles.rootContainer}>
         <Pressable
          onPress={() => {
            this.doResetNow();
          }}
          style={(callback) => (callback.pressed ? {opacity: 0.3} : {opacity: 1})}>
          <Text style={[styles.text, {marginBottom: 20}]}>Reset</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            this.doIncrementNow();
          }}
          style={(callback) => (callback.pressed ? {opacity: 0.3} : {opacity: 1})}>
          <Text style={styles.text}>Increment</Text>
        </Pressable>
        <Text style={[styles.text, {marginTop: 20, backgroundColor: 'white'}]}>
          Value is {this.state.value}
        </Text>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  text: {
    backgroundColor: 'pink',
    padding: 15,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
