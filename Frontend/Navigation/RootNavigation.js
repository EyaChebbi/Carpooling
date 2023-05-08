import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/Welcome';
import DataDriver from '../Screens/DataDriver';
import FindMatch from '../Screens/FindMatch';
import PassengerList from '../Screens/PassengerList';
import DriverList from '../Screens/DriverList';
import MapScreen from '../Screens/MapScreen';

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
        name="PassengerList"
        component={PassengerList}
        options={{ title: 'Passenger List', headerShown: false }}
      />
      <Stack.Screen
        name="DriverList"
        component={DriverList}
        options={{ title: 'Driver List', headerShown: false }}
      />
       <Stack.Screen
        name="Driver"
        component={DataDriver}
        options={{ title: 'Driver', headerShown: false }}

      /> 
      <Stack.Screen
        name="FindMatch"
        component={FindMatch}
        options={{ title: 'Find Match', headerShown: false }}
      /> 
       <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: 'Map Screen', headerShown: false }}
      /> 

    </Stack.Navigator>
  );
}
