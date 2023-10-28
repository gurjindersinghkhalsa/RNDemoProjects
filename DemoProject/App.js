/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
const App = () => {

  const [show, setshow] = useState(false)
  return (
    <View style={{backgroundColor: 'white', flex: 1, marginTop: 100}}>
      <Button title="Toggle Component" onPress={() => setshow(!show)} />
      { show ? <StudentP name='Gurjinder Singh'/> : null }
    </View>
  );
};

const StudentP=(props)=>{
  let timer = setInterval(() => {
    console.warn('Timere');
  }, 2000); // This will call every 2 sec

  useEffect(()=>{
    return ()=> {
      clearInterval(timer);
    }
  })
  return(
    <View>
      <Text style={{backgroundColor:'red'}}>{props.name}</Text>
    </View>
  )
}
export default App;
