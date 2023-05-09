import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from './MapScreen';

export default function DriverList({navigation}) {
  
    const handlePassengerSelection = () => {
        console.log('Passenger Selected');
        navigation.navigate('MapScreen');

    };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Please select a Driver !</Text>
      <Text style={styles.userTypeText}>There are 4 drivers available in your area</Text>
      <View style={styles.passengers}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.driverButton} onPress={handlePassengerSelection}>
                <Ionicons style={styles.image} name="person-circle-outline" size={44} color="black" />
                <Text style={styles.buttonText}>Mohamed Mouch</Text>
                <Text style={styles.buttonLocation}> L'aouina </Text>
                <View style={styles.rating}>
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.driverButton} onPress={handlePassengerSelection}>
                <Ionicons style={styles.image} name="person-circle-outline" size={48} color="black" />
                <Text style={styles.buttonText}>Achraf Haddad</Text>
                <Text style={styles.buttonLocation}> Manar 1 </Text>
                <View style={styles.rating}>
                    <Ionicons name="star" size={15} color="black" />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.driverButton} onPress={handlePassengerSelection}>
                <Ionicons style={styles.image} name="person-circle-outline" size={48} color="black" />
                <Text style={styles.buttonText}>Sami Loukil</Text>
                <Text style={styles.buttonLocation}> La Goulette </Text>
                <View style={styles.rating}>
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.driverButton} onPress={handlePassengerSelection}>
                <Ionicons style={styles.image} name="person-circle-outline" size={48} color="black" />
                <Text style={styles.buttonText}>Karama Jeribi</Text>
                <Text style={styles.buttonLocation}> Menzah 1 </Text>
                <View style={styles.rating}>
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                    <Ionicons name="star" size={15} color="black" />
                </View>
            </TouchableOpacity>
        </View>  
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
  passengers: {

  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  userTypeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 32,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  rating:{
    flex:1,
    flexDirection:'row',
    marginTop:2,
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
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  buttonLocation:{
    marginTop: 2,
  },
  image:{
    marginTop:5,
  },
});
