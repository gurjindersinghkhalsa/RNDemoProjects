/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
function App() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const data = await response.json();
    setData(data.movies);
    } catch(error){
      alert(error)
    }
  }
  function resetData(){
    setData([])
  }
  return (
    <View style={style.root}>
      {data && data.map(model => <Text key={model.title}>{model.title}</Text>)}
      <Pressable onPress={getData}>
        <Text>Get Movies Name</Text>
      </Pressable>
      <Pressable onPress={resetData}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
export default App;
const style = StyleSheet.create({
  opacity: {
    opacity: 0.75,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
