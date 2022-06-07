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
    console.log('This is called');
    this.setState({value: this.state.value + 1}, () => {
      console.log('Final value is ->', this.state.value);
    });
  }
  render() {
    return (
      <View style={styles.rootContainer}>
        <Pressable
          onPress={() => {
            this.doIncrementNow();
          }}>
          <Text style={styles.text}>Increment</Text>
        </Pressable>
        <Text style={[styles.text, {marginTop: 20}]}>
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
