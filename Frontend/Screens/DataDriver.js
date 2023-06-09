import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
// import { Slider } from "@miblanchard/react-native-slider";
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function DataDriver({navigation}) {
    const handleSearch = () => {
        console.log('Search Result: ....');
        navigation.navigate('Driver');
    };
    

    const [startingPoint, setStartingPoint] = useState('36.810396, 10.146139');
    const [destination, setDestination] = useState('1053 Les Berges du Lac...');
    const [nbSpots, setNbSpots] = useState("");
    const [searchRadius, setSearchRadius] = useState('0m'); 


    return (
        <View style={styles.container}>
            <Text style={styles.selectStarting}>Select your starting point on the map:</Text>
            <TextInput 
                style={styles.mapInput} 
                defaultValue={startingPoint}
                onChangeText={val => setStartingPoint(val)}
                onFocus={() => {
                    if (startingPoint === '36.810396, 10.146139') {
                    setStartingPoint(''); 
                    }}}
            />
            <Text style={styles.selectStarting}>Select your destination:</Text>
            <TextInput 
                style={styles.mapInput} 
                defaultValue={destination}
                onChangeText={val => setDestination(val)}
                onFocus={() => {
                    if (destination === '1053 Les Berges du Lac...') {
                    setDestination(''); 
                    }}}
            />
            <Text style={styles.selectStarting}>Spots to fill:</Text>
             <Picker
                selectedValue={nbSpots}
                onValueChange={(itemValue, itemIndex) => setNbSpots(itemValue)}
                style={{ height: 80, width: 100 ,justifyContent:'center'}}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
            </Picker>
            <Text style={styles.selectStarting}>Search Radius:</Text>
            <Text style={styles.radInput}>
                {searchRadius}
            </Text>
            <Slider
                minimumValue={0}
                maximumValue={2000}
                style={{width: 200, height: 40}}
                step={1}
                minimumTrackTintColor="#dddddd"
                maximumTrackTintColor="#000000"
                // value={searchRadius}
                onValueChange={(val) => setSearchRadius(val + 'm')}
            /> 
            <Pressable style={styles.search} onPress={handleSearch}> 
                <Text style={{fontSize:"25"}} >
                    Search
                </Text>
            </Pressable>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radInput :{
    backgroundColor: '#EEEEEE',
    borderRadius: 13,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    width: 100,
  }, 
  search:{
    backgroundColor: 'rgba(255, 192, 203, 0.8)',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 15, 
    borderColor: 'black', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    
    

  },     
  mapInput:{
    backgroundColor: '#EEEEEE',
    borderRadius: 13,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 16,
    width: 250,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
  },
  selectStarting:{
    fontWeight: 'bold',
    fontSize: 18,
    padding:20,
  },  
});
