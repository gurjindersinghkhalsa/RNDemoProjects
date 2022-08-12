/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Text, Pressable, View, StyleSheet, Alert} from 'react-native';

import {
  check,
  PERMISSIONS,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

function App() {
  const [permissionStatus, setPermissionStatus] = React.useState('--');
  const [permissionAllowed, setPermissionAllowed] = React.useState(false);

  useEffect(() => {
    check(PERMISSIONS.IOS.MICROPHONE)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            setPermissionAllowed(false);
            break;
          case RESULTS.DENIED:
            setPermissionStatus(
              'The permission has not been requested / is denied but requestable',
            );
            setPermissionAllowed(false);
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            setPermissionAllowed(false);
            break;
          case RESULTS.GRANTED:
            setPermissionStatus('The permission is granted');
            setPermissionAllowed(true);
            break;
          case RESULTS.BLOCKED:
            requestMicroPhonePermission(
              'The permission is denied and not requestable anymore',
            );
            setPermissionAllowed(false);
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function showSettingAlert() {
    Alert.alert(
      'Permission is denied',
      'Please open Settings App and set Microphone permission',
      [
        {
          text: 'Ok',
          onPress: () =>
            openSettings().catch(() => console.warn('cannot open settings')),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  }
  function requestMicroPhonePermission() {
    request(PERMISSIONS.IOS.MICROPHONE).then(result => {
      setPermissionStatus(result);
      switch (result) {
        case RESULTS.DENIED:
          setPermissionAllowed(false);
          showSettingAlert();
          break;
        case RESULTS.GRANTED:
          setPermissionAllowed(true);
          break;
        case RESULTS.BLOCKED:
          setPermissionAllowed(false);
          setPermissionStatus(
            'The permission is denied and not requestable anymore',
          );
          showSettingAlert();
          break;
      }
    });
  }

  return (
    <View style={style.rootContainer}>
      <View style={style.text}>
        <Text>{permissionStatus}</Text>
      </View>
      <View style={style.button}>
        <Pressable onPress={() => requestMicroPhonePermission()}>
          <Text style={style.buttonText}>
            {permissionAllowed
              ? 'Microphone Permission Allowed '
              : 'Get Microphone Permission'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
export default App;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  button: {
    padding: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    marginTop: 50,
  },
  text: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    color:'white',
  },
});
