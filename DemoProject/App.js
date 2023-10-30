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
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
const App = () => {
  const [show, setIsShow] = useState(true);

  const showHideIndicator = () => {
    setIsShow(!show);
  };

  return (
    <View style={styles.main}>
      <View style={{height: 72}}></View>
      <ActivityIndicator size={'large'} color={'red'} animating={show} />
      <ActivityIndicator size={'large'} color={'green'} animating={show} />
      <Button title="Show/Hide Indicator" onPress={showHideIndicator} />
    </View>
  );
};
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundViewInner: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: 'skyblue',
  },
});
export default App;
