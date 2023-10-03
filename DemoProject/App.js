/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useReducer} from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';
import {act} from 'react-test-renderer';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Add':
        return (state += 1);
      case 'Subtract':
        return (state -= 1);
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View style={style.rootContainer}>
      <View style={style.text}>
        <Text>{state}</Text>
      </View>
      <View style={style.button}>
        <Pressable
          onPress={() => {
            dispatch({type: 'Add'});
          }}>
          <Text>Add</Text>
        </Pressable>
      </View>

      <View style={style.button}>
        <Pressable onPress={() => dispatch({type: 'Subtract'})}>
          <Text>Subtract</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default App;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    padding: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
  },
});
