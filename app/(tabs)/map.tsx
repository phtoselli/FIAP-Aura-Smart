import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useShelterRoute } from "../../hooks/useShelterRoute";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

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
  {
    id: "4",
    name: "Abrigo Vila Hortência",
    address: "Av. Nogueira Padilha, 1010 - Vila Hortência, Sorocaba - SP",
    location: { latitude: -23.507734, longitude: -47.427831 },
  },
  {
    id: "5",
    name: "Abrigo Éden",
    address: "Rua Salvador Leite Marques, 215 - Éden, Sorocaba - SP",
    location: { latitude: -23.544123, longitude: -47.389876 },
  },
  {
    id: "6",
    name: "Abrigo Cajuru",
    address: "Rua Francisco Moron, 45 - Cajuru do Sul, Sorocaba - SP",
    location: { latitude: -23.578155, longitude: -47.437201 },
  },
  {
    id: "7",
    name: "Abrigo Campolim",
    address: "Rua Antônio Perez Hernandez, 35 - Campolim, Sorocaba - SP",
    location: { latitude: -23.5197, longitude: -47.45501 },
  },
  {
    id: "8",
    name: "Abrigo Mineirão",
    address: "Rua José Raimundo da Silva, 142 - Mineirão, Sorocaba - SP",
    location: { latitude: -23.51744, longitude: -47.470321 },
  },
];

const GOOGLE_MAPS_APIKEY = "AIzaSyC1h--AjhV-kE_uKmawMgKihC_8lQ6En08";

export default function MapScreen() {
  const router = useRouter();
  const { userLocation, nearestShelter } = useShelterRoute(shelters);

  if (!userLocation) {
    return (
      <View
        style={styles.center}
        accessibilityRole="text"
        accessibilityLiveRegion="polite"
      >
        <Text>Carregando sua localização...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={styles.logoContainer}
          accessibilityLabel="Mapa mostrando sua localização atual e os abrigos disponíveis"
        >
          <Image
            source={require("../../assets/images/AuraSmartLogo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
      </View>

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
          accessibilityLabel="Sua localização atual"
        />

        {/* Marcadores dos abrigos */}
        {shelters.map((shelter) => (
          <Marker
            key={shelter.id}
            coordinate={shelter.location}
            title={shelter.name}
            description={shelter.address}
            pinColor={shelter.id === nearestShelter?.id ? "green" : "red"}
            accessibilityLabel={`Abrigo: ${shelter.name}. Endereço: ${
              shelter.address
            }. ${
              shelter.id === nearestShelter?.id
                ? "Este é o abrigo mais próximo."
                : ""
            }`}
            onPress={() =>
              router.push({
                pathname: "/screens/details",
                params: { shelter: JSON.stringify(shelter) },
              })
            }
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 40,
    width: 200,
  },
  prefeituraImage: {
    height: 30,
    width: 120,
    marginLeft: 5,
  },
});
