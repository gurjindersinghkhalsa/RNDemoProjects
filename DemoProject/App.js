/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Button,
  Image,
  ScrollView
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductWrapper from './Component/ProductWrapper';
import UserList from './Component/UserList';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper}/>
         <Stack.Screen name='User' component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={{backgroundColor:'white'}}>
    //   <Text>Gurjinder SIngh</Text>
    // </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  }
});
export default App;
