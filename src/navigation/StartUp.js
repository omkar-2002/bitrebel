import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../screen/auth/Login';
import SignUpBachelor from '../screen/auth/SignUpBachelor';
import SignUpBusiness from '../screen/auth/SignUpBusiness';
import Category from '../screen/auth/Category';
export default function StartUp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SignUpBachelor"
        component={SignUpBachelor}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SignUpBusiness"
        component={SignUpBusiness}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
