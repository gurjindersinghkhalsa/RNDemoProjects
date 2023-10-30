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
  Button
} from 'react-native';
const App = () => {
  const [show, setIsShow] = useState(true);
  return (
    <View style={styles.main}>
      <View style={{height: 72}}></View>
      <Modal
      animationType='slide'
      visible={show}
      >
        <View style={{backgroundColor: 'white', flex: 1, alignItems:'center', justifyContent: 'center',}}>
          <View style={styles.textBgView}>
              <Text style = {{fontSize: 18, }}>This is Modal Examle</Text>
              <View style={{backgroundColor: 'black', marginTop: 20, borderRadius: 10}}>
              <Button color={'white'} title='Hide' onPress={()=> setIsShow(false)}/>
              </View>
          </View>
        </View>
      </Modal>
      <Button title='Show Modal' onPress={()=>setIsShow(true)}/>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  textBgView: {
    backgroundColor: 'yellow', 
    padding: 30, 
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    }
});
export default App;
