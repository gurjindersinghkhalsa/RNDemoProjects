/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {UserData} from './Component/UserData';
function App() {
  const title: String = "Flat List with TS";
  const data = [
    {
      id: 1,
      name: 'Gurjinder Singh',
    },
    {
      id: 2,
      name: 'Sher Singh',
    },
    {
      id: 3,
      name: 'Harinder Singh',
    },
  ];

  return (
    <View style={style.rootContainer}>
      <Text>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <UserData item={item}/>
        )}
        keyExtractor={(item)=> item.id}
      />
      {/* <ScrollView>
        {data.map(item => (
          <Text style={style.text}>{item.name}</Text>
        ))}
      </ScrollView> */}
    </View>
  );
}


export default App;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 70,
    backgroundColor: 'white',
  }
});
