import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Frontend/Screens/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Frontend/Navigation/RootNavigation';
import FindMatch from './Frontend/Screens/FindMatch';


export default function App() {
  return (
  //to uncomment after adding all the screens
   <NavigationContainer>
     <RootNavigator/>
   </NavigationContainer> 



  //<FindMatch/>
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
