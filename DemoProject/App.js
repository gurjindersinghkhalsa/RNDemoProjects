/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
function App() {
  const [data, setData] = useState([]);
  const [showActivity, setshowActivity] = useState(false);

  useEffect(() => {
    setshowActivity(true);
    getMovies();
  }, []);

  async function getMovies() {
    setshowActivity(true);
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const data = await response.json();
      setshowActivity(false);
      setData(data.movies);
    } catch (error) {
      alert(error);
    } finally {
    }
  }
  function resetData() {
    setData([]);
  }

  return (
    <View style={style.root}>
      <ActivityIndicator
        animating={showActivity}
        size="large"
        color="#999999"
      />
      {data &&
        data.map(model => (
          <Text style={[style.text, {color: 'black'}]} key={model.title}>
            {model.title}
          </Text>
        ))}
      <Pressable onPress={getMovies}>
        <View style={style.button}>
          <Text style={style.text}>Get Movies Name</Text>
        </View>
      </Pressable>
      <Pressable onPress={resetData}>
        <View style={style.button}>
          <Text style={style.text}>Reset</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default App;
const style = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  opacity: {
    opacity: 0.75,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
