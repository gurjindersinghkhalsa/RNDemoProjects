/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, SectionList} from 'react-native';
import {UserData} from './Component/UserData';

function App() {
  const title: String = 'Flat List with TS';
  const data = [
    {
      id: 1,
      name: 'Gurjinder Singh',
      data: ['iOS', 'Android', 'React Native'],
    },
    {
      id: 2,
      name: 'Sher Singh',
      data: ['Angular', 'Android', 'React Native'],
    },
    {
      id: 3,
      name: 'Harinder Singh',
      data: ['React JS', 'Android', 'React Native'], // key need to be data
    },
  ];

  return (
    <View style={style.rootContainer}>
      <SectionList
        sections={data}
        renderItem={({item}) => <UserData item={item} />}
        renderSectionHeader={({section: {id}}) => (
          <Text style={{fontSize: 30, margin: 15}}>{id}</Text>
        )}
      />
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
});
