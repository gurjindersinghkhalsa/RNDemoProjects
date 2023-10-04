/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {act} from 'react-test-renderer';

function App() {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [display, setdisplay] = useState(false);

  const clearInput = () => {
    setdisplay(false);
    setname('');
    setPassword('');
  };
  return (
    <View style={style.rootContainer}>
      <Text>Form</Text>
      <TextInput
        style={style.textInput}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setname(text)}
      />

      <TextInput
        style={style.textInput}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button title="Submit" onPress={()=> setdisplay(true)} />
      <Button title="Clear" onPress={() => clearInput()} />
      {
        display
        ?
        <View> 
            <Text style={style.textInput}>Name: {name}</Text>
            <Text style={style.textInput}>Password: {password}</Text>
        </View>
        :
        null
      }

    </View>
  );
}
export default App;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 70,
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 26,
    borderWidth: 1,
    margin: 10,
    color: 'blue',
    padding: 10,
    borderRadius: 10,
  },
});
