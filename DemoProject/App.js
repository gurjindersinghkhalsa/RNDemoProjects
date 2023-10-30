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

  var arrSkills = [
    {
      name: 'iOS developer',
      id: 1,
    },
    {
      name: 'Android developer',
      id: 2,
    },
    {
      name: 'Flutter developer',
      id: 3,
    },
    {
      name: 'React Native developer',
      id: 4,
    },

  ]
  return(
    <View style={styles.main}>  
      <View style={{height:72}}></View>
      
      {arrSkills.map(function(item){
        return (
        <TouchableOpacity 
        key={item.id}
        onPress={()=>setSelected(item.id)}>
      
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.roundView}>
           {selected == item.id ? <View style={styles.roundViewInner}></View> : null}
          </View>
          <Text>{item.name}</Text>
        </View>

      </TouchableOpacity>
      )
      })}

      

      {/* <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.roundView}>
          {selected == 2 ? <View style={styles.roundViewInner}></View> : null}
          </View>
          <Text>Radio 2</Text>
        </View>
      </TouchableOpacity> */}

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
    // backgroundColor: 'skyblue',
    borderWidth: 4,
    borderColor: 'skyblue',
    margin: 5,
    alignItems:'center',
    justifyContent: 'center'
  },
  roundViewInner:  {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: 'skyblue',
  },
})
export default App;
