/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

function App() {
  const data = [
    {
      id: 1,
      name: 'GS',
    },
    {
      id: 2,
      name: 'SS',
    },
    {
      id: 3,
      name: 'HS',
    },
    {
      id: 1,
      name: 'GS',
    },
    {
      id: 2,
      name: 'SS',
    },
    {
      id: 3,
      name: 'HS',
    },
    {
      id: 1,
      name: 'GS',
    },
    {
      id: 2,
      name: 'SS',
    },
    {
      id: 3,
      name: 'HS',
    },
  ];

  return (
    <View style={style.rootContainer}>
      <ScrollView>
        <View style={style.rootContainer}>
          {data.map(item => (
            <Text style={style.text}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
export default App;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 70,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    borderWidth: 1,
    margin: 5,
    color: 'blue',
    backgroundColor: 'red',
    padding: 30,
    overflow: 'hidden',
    borderRadius: 10,
  },
});
