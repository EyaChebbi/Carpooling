import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';


const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const [startPoint, setStartPoint] = useState(null);
const [destination, setDestination] = useState(null);
const [routePolyline, setRoutePolyline] = useState([]);
const [routeInfo, setRouteInfo] = useState({ distance: null, duration: null });

const handleMapPress = (event) => {
    // If startPoint is null, set the startPoint with the tapped coordinates
    if (!startPoint) {
      setStartPoint(event.nativeEvent.coordinate);
    }
    // If startPoint is set and destination is null, set the destination with the tapped coordinates
    else if (!destination) {
      setDestination(event.nativeEvent.coordinate);
    }
    // If both startPoint and destination are set, reset the startPoint and destination
    else {
      setStartPoint(null);
      setDestination(null);
    }
  };
  


  const fetchRouteData = async (origin, destination, apiKey) => {
    try {
      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${origin.longitude},${origin.latitude}&end=${destination.longitude},${destination.latitude}`;
      const response = await fetch(url);
      const data = await response.json();
  
      // Get the coordinates from the route data and convert them to the required format
      const coordinates = data.features[0].geometry.coordinates.map(
        (coord) => ({
          latitude: coord[1],
          longitude: coord[0],
        })
      );
      setRoutePolyline(coordinates);
  
      // Set the distance and duration information
      const distance = data.features[0].properties.segments[0].distance;
      const duration = data.features[0].properties.segments[0].duration;
      setRouteInfo({ distance, duration });
  
    } catch (error) {
      console.error('Error fetching route data:', error);
    }
  };
  

  useEffect(() => {
    if (startPoint && destination) {
      const apiKey = '5b3ce3597851110001cf6248eaec6522744c4ff8adb02be9f6a10b12';
      fetchRouteData(startPoint, destination, apiKey);
    }
  }, [destination]);
  

  return (
    <View style={styles.container}>
    <MapView
  provider={PROVIDER_GOOGLE}
  style={styles.map}
  initialRegion={region}
  onPress={handleMapPress}
>
  {startPoint && (
    <Marker
      coordinate={startPoint}
      pinColor="green"
      title="Starting Point"
    />
  )}
  {destination && (
    <Marker
      coordinate={destination}
      pinColor="red"
      title="Destination"
    />
  )}
  {routePolyline.length > 0 && (
    <Polyline
      coordinates={routePolyline}
      strokeWidth={5}
      strokeColor="blue"
    />
  )}
</MapView>
<Text>
  {routeInfo.distance && `Distance: ${routeInfo.distance / 1000} km`}
</Text>
<Text>
  {routeInfo.duration &&
    `Duration: ${(routeInfo.duration / 60).toFixed(1)} minutes`}
</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
