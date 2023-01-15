/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from 'react-native';

function App() {
  const [uName, setuName] = React.useState('');
  const [uPass, setuPass] = React.useState('');

  const checkCreds=()=> {
      if(uPass === '' || uName === '') {
        alert('Please fill all fields')
      } else {
        alert('Succesfull')
      }
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardStyle}
      behavior="padding"
      keyboardVerticalOffset={0}>
      <View style={styles.rootContainer}>
        <View style={styles.viewTextInput}>
          <Text style={styles.userName}>UserName</Text>
          <TextInput 
          placeholder="Enter UserName"  
          placeholderTextColor="white"
          style={styles.textInput}
          onChangeText={setuName}
          value={uName}
           />
          <Text style={[styles.userName, {marginTop: 20}]}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={setuPass}
            value={uPass}
          />
        </View>
      </View>
       <View style={styles.viewLogin}>
          <Pressable onPress={() => checkCreds()}>
            <Text style={styles.textLogin}>Login</Text>
          </Pressable>
        </View>
    </KeyboardAvoidingView>
  );
}
export default App;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  keyboardStyle: {flex: 1, backgroundColor: 'white'},
  viewTextInput: {
    backgroundColor: 'rgb(10, 10, 120)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
  },
  userName: {marginBottom: 15, color: 'white', fontWeight: '500', fontSize: 18},
  textInput: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
  },
  textLogin: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  viewLogin: {
    backgroundColor: 'rgb(10, 10, 110)',
    padding: 20,
    margin: 30,
    width: '80%',
    borderRadius: 50,
  },
});
