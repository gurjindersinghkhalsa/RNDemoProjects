import {View, Text, Image, Button} from 'react-native';
import React from 'react';

const Product = props => {
  let item = props.item;
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
      }}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.color}</Text>
      <Image source={{uri: item.image}} style={{width: 200, height: 160}} />
      <Button title="Add To Cart" />
    </View>
  );
};
export default Product;
