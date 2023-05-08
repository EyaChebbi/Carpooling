import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/Welcome';
import DataDriver from '../Screens/DataDriver';

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
        component={DataDriver}
        options={{ title: 'Driver' }}
      /> 
    </Stack.Navigator>
  );
}
