/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const App = () => {

  const [selected, setSelected] = useState(1);

  return(
    <View style={styles.main}>  
      <View style={{height:72}}></View>
      
      <TouchableOpacity onPress={()=>setSelected(1)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.roundView}>
           {selected == 1 ? <View style={styles.roundViewInner}></View> : null}
          </View>
          <Text>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.roundView}>
          {selected == 2 ? <View style={styles.roundViewInner}></View> : null}
          </View>
          <Text>Radio 2</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  roundView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'skyblue',
    margin: 5,
    alignItems:'center',
    justifyContent: 'center'
  },
  roundViewInner:  {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
})
export default App;
