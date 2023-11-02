import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getUserList } from './redux/action';

const UserList = () => {

  const userList = useSelector((state)=> state.reducer);
  let finalUsers = userList[0].users;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  });

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
          userList.length
           ?
           finalUsers.map((item)=> (<Text style={{fontSize: 19, fontWeight: '400'}}>{item.id}  {item.firstName}</Text>))
          :
          null
        }
        </ScrollView>
      <Text>User List</Text>
    </View>
  );
};

export default UserList;
