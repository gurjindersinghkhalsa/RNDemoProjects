import {View, Text} from 'react-native';
import React from 'react';

const UserList = () => {
  return (
    <View
      style={{
        backgroundColor: 'orange',
        marginTop: 30,
        flexDirection: 'row',
        height: 40,
        // justifyContent: 'f',
      }}>
      <Text>User List</Text>
    </View>
  );
};

export default UserList;
