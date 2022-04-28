/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  Pressable,
  View,
  StyleSheet
} from 'react-native';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = React.useState('No Advice');

  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  const getAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice/' + getRandomId(1, 200))
      .then(response => {
        setAdvice(response.data.slip.advice);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{advice}</Text>
      <View style={{padding: 20, backgroundColor: 'red', borderRadius:10, marginTop: 50}}>
      <Pressable onPress={() => getAdvice()}>
        <Text>
          Get Advice
        </Text>
      </Pressable>
      </View>
    </View>
  );
}
export default App;


