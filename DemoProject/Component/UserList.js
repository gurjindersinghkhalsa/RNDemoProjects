import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getUserList } from './redux/action';

const UserList = () => {

  const userList = useSelector((state)=> state.reducer);
  // we are storing data in arr so receiving arr. from server we are rec object
  // if (userList.length) {
  //   let finalUsers = userList[0].users;
  // }
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  });
//  console.warn(userList)
  return (
    <View
      style={{
        backgroundColor: 'orange',
        marginTop: 30,
        // flexDirection: 'row',
        // height: 40,
        // justifyContent: 'f',
      }}>
        <ScrollView>
        {
          userList.length > 0
           ?
           userList[0].users.map((item)=> (<Text key='{item.id}' style={{fontSize: 19, fontWeight: '400'}}>{item.id}  {item.firstName}</Text>))
          :
          <Text style={{fontSize: 30}}>Waiting for API Response</Text>
        }
        </ScrollView>
      <Text>User List</Text>
    </View>
  );
};

export default UserList;
