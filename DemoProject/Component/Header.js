import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'; //redux

const Header = () => {
  const cartItems = useSelector((state) => state.reducer);// Redux

  const [cartItemsCount, setcartItemsCount] = useState(0);

  useEffect(() => {
    setcartItemsCount(cartItems.length);
  }, [cartItems]);

  return (
    <View
      style={{
        backgroundColor: 'orange',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      <Text
        style={{fontSize: 30, fontWeight: '500', color: 'red', padding: 10}}>
        {cartItemsCount}
      </Text>
    </View>
  );
};

export default Header;
