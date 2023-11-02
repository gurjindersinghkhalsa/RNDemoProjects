import {View, Text, Image, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartAction, removeFromCartAction} from './redux/action';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const [isAdded, setisAdded] = useState(false);
  const cartItems = useSelector(state => state.reducer);

  useEffect(() => {
    // console.log('here', cartItems);
    if(cartItems) {
      const allItems = cartItems.filter((element)=>{
        return element.name === item.name
      })
      if(allItems.length) {
        setisAdded(true);
      } else {
        setisAdded(false);
      }
    }
  }, [cartItems]);

  const removeFromCart=(item)=>{
    dispatch(removeFromCartAction(item.name));
  }
  const handleAddToCart = (item) => {
    dispatch(addToCartAction(item));
  };

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
      {isAdded ? (
        <Button
          title="Remove From Cart"
          onPress={() => removeFromCart(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};
export default Product;
