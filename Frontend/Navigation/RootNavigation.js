import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/Welcome';
//import DriverScreen from './DriverScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Driver"
        component={DriverScreen}
        options={{ title: 'Driver' }}
      /> 
    </Stack.Navigator>
  );
}
