import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useShelterRoute } from "../../hooks/useShelterRoute";

const shelters = [
  {
    id: "1",
    name: "Abrigo Central",
    address: "Rua A, 123",
    location: { latitude: -23.561684, longitude: -46.625378 },
  },
  {
    id: "2",
    name: "Abrigo Leste",
    address: "Rua B, 456",
    location: { latitude: -23.563, longitude: -46.635 },
  },
  {
    id: "3",
    name: "Abrigo Santa Rosália",
    address:
      "Rua Capitão Bento Mascarenhas Jequitinhonha, 789 - Santa Rosália, Sorocaba - SP",
    location: { latitude: -23.493478, longitude: -47.448853 },
  },
];

const GOOGLE_MAPS_APIKEY = "segredo";

export default function MapScreen() {
  const { userLocation, nearestShelter } = useShelterRoute(shelters);

  if (!userLocation) {
    return (
      <View style={styles.center}>
        <Text>Carregando sua localização...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {/* Localização do Usuário */}
      <Marker
        coordinate={userLocation}
        title="Você está aqui"
        pinColor="blue"
      />

      {/* Marcadores dos abrigos */}
      {shelters.map((shelter) => (
        <Marker
          key={shelter.id}
          coordinate={shelter.location}
          title={shelter.name}
          description={shelter.address}
          pinColor={shelter.id === nearestShelter?.id ? "green" : "red"}
        />
      ))}

      {/* Traçando a rota até o abrigo mais próximo */}
      {nearestShelter && (
        <MapViewDirections
          origin={userLocation}
          destination={nearestShelter.location}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="blue"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
