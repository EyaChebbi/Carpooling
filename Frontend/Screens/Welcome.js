import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Welcome({navigation}) {
  const handleDriverPress = () => {
    console.log('Driver button pressed');
    navigation.navigate('DriverList');
};

  const handlePassengerPress = () => {
    console.log('Passenger button pressed');
    navigation.navigate('PassengerList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Wassalni !</Text>
      <Text style={styles.userTypeText}>Which type of user are you today?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.driverButton} onPress={handleDriverPress}>
          <Ionicons name="car" size={48} color="black" />
          <Text style={styles.buttonText}>Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.passengerButton} onPress={handlePassengerPress}>
          <Ionicons name="car" size={48} color="black" />
          <Text style={styles.buttonText}>Passenger</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  userTypeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: "center"
  },
  driverButton: {
    backgroundColor: 'rgba(253, 228, 90, 0.9)', 
    width: 150,
    height: 150,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 3, 
    borderColor: 'black', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    elevation: 5,  
  },
  passengerButton: {
    backgroundColor: 'rgba(144, 219, 155, 0.9)', 
    width: 150,
    height: 150,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 3, 
    borderColor: 'black', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    elevation: 5,  
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
