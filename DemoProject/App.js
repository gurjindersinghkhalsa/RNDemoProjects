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
  Button,
  Image,
  ScrollView
} from 'react-native';
import Product from './Component/Product';
import Header from './Component/Header';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

const products = [
 {
   name: 'Samsung',
  color: 'white',
  price: 30000,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXqSjVhEFV2LxfaxlIlFAuuRwNQvn7j9YQfERx9uh9wguU2kAAFrQydPxAgqh4IwmtQw&usqp=CAU',
},
{
  name: 'iPhone',
 color: 'white',
 price: 60000,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tUd44pAPLjXkws1kdQ7gvvsDjWg2CFudlqS8DOaXX4Im_wzMDnz1NwtvcHJUHhzAoa8&usqp=CAU',
},
{
  name: 'Motorola',
 color: 'red',
 price: 10000,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXqSjVhEFV2LxfaxlIlFAuuRwNQvn7j9YQfERx9uh9wguU2kAAFrQydPxAgqh4IwmtQw&usqp=CAU'
}
]

  return (
    <View style={styles.main}>
      <View style={{height: 72}}></View>
      <Header/>
      <ScrollView>

{
  products.map((item)=>{
    return <Product item={item}/>
  })
}
</ScrollView>
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
