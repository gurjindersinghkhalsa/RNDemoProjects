/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

function App() {
  const [name, setName] = useState('Gurjinder Singh');
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 90}}>
      <Text  style={{marginLeft: 90}}>Parent Component: </Text>
      <Text>name: {name}</Text>
      <Button title="Change Name" onPress={() => setName('Sargun Kaur')} />
      <Button title="Revert Name" onPress={() => setName('Gurjinder Singh')} />
      <User name={name} age={'39'} />
    </View>
  );
}
export default App;

const User = param => {
  return (
    <View style={{padding: 10,margin: 10}}>
      <Text style={{marginLeft: 90}}>Parent Component: </Text>
      <Text>Name: {param.name}</Text>
      <Text>Age: {param.age}</Text>
    </View>
  );
};
