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
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
function App() {
  return (
    <KeyboardAvoidingView
    style={{flex:1,backgroundColor:'white'}}
      behavior="padding"
      keyboardVerticalOffset={0}>
      <View style={styles.rootContainer}>
        <View
          style={{
            backgroundColor: 'pink',
            padding: 20,
            borderRadius: 10,
            width: '80%',
            justifyContent: 'center',
          }}>
          <Text style={{marginBottom: 15}}>UserName</Text>
          <TextInput
            placeholder="Enter your Name"
            style={{width: '100%', borderWidth: 1, padding: 10}}
          />
          <Text style={{marginBottom: 15, marginTop: 20}}>Password</Text>
          <TextInput
            placeholder="Enter your Password"
            style={{width: '100%', borderWidth: 1, padding: 10}}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            padding: 20,
            margin: 30,
            width: '80%',
            borderRadius: 50,
          }}>
          <Pressable onPress={() => alert('Successfull')}>
            <Text style={{color: 'black',fontWeight:'500', fontSize: 24, textAlign: 'center'}}>
              Login
            </Text>
          </Pressable>
        </View>
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
});
