import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {myContext, myEmailContext} from './App';
const ComponentD = () => {
  const name = useContext(myContext);
  const email = useContext(myEmailContext);
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text>  ComponentD {name} {email} </Text>
    </View>
  );
};
export default ComponentD;
