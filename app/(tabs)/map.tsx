import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import axios from "axios";

export default function MapScreen() {
  const [routeCoords, setRouteCoords] = useState([]);
  const userLocation = { latitude: -23.5631, longitude: -46.6544 }; // Localização atual simulada
  const shelterLocation = { latitude: -23.5505, longitude: -46.6333 }; // Local do abrigo

  useEffect(() => {
    fetchRoute();
  }, []);

  const fetchRoute = async () => {
    const url = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=5b3ce3597851110001cf62486b739c186c074617b1325b7af5b1d5d0`;
    const coordinates = {
      coordinates: [
        [userLocation.longitude, userLocation.latitude],
        [shelterLocation.longitude, shelterLocation.latitude],
      ],
    };

    try {
      const response = await axios.post(url, coordinates, {
        headers: { "Content-Type": "application/json" },
      });

      const coords = response.data.features[0].geometry.coordinates.map(
        (coord: number[]) => ({
          latitude: coord[1],
          longitude: coord[0],
        })
      );

      setRouteCoords(coords);
    } catch (error) {
      console.error("Erro ao buscar rota:", error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={userLocation} title="Você" />
        <Marker
          coordinate={shelterLocation}
          title="Abrigo"
          description="Endereço do Abrigo"
          pinColor="green"
        />
        <Polyline
          coordinates={routeCoords}
          strokeWidth={5}
          strokeColor="blue"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
