import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Frontend/Screens/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Frontend/Navigation/RootNavigation';
import FindMatch from './Frontend/Screens/FindMatch';
import {Provider} from "react-redux";
import {store} from "./store";
import {SafeAreaProvider} from "react-native-safe-area-context";
import MapScreen from './Frontend/Screens/MapScreen';
import 'react-native-gesture-handler';

export default function App() {
  return (
  //to uncomment after adding all the screens
  //  <NavigationContainer>
  //    <RootNavigator/>
  //  </NavigationContainer> 


<Provider store={store}>
  <NavigationContainer>
  <SafeAreaProvider>
  <RootNavigator/>
  </SafeAreaProvider>
  </NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
