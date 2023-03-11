import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../screen/auth/Login';

export default function StartUp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
