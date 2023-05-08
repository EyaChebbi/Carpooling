import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function FindMatch({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleCancel = () => {
    // You can add your cancel search logic here
    setIsLoading(false);
    console.log("Cancel button pressed")
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>Please wait</Text>
        <Text style={styles.statusText}>Searching for a match</Text>
      </View>
      {isLoading ? <ActivityIndicator size="large" color="#000000" style={styles.loadingIcon}/> : null}
      <TouchableOpacity style={styles.button} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 192, 203, 0.8)', // Pastel pink color
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 30,
    borderWidth: 3, 
    borderRadius: 15,
    borderColor: 'black', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    elevation: 5,
  },
  loadingIcon: {
    transform: [{ scale: 2 }], 
    marginTop: 50,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 192, 203, 0.8)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 15, 
    borderColor: 'black', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    marginTop: 150,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
