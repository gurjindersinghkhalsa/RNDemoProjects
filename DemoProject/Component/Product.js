import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import { addToCart } from './redux/action';
import {useSelector} from 'react-redux';


const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart=()=>{
    dispatch(addToCart(item));
  }

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
      <Button title="Add To Cart" onPress={()=>handleAddToCart(item)} />
    </View>
  );
};
export default Product;
